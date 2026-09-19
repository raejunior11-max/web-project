const firebaseConfig = {
	apiKey: 'AIzaSyAnglsFxELNtqPLb_TyLdA5ggS_LgWJ1nA',
	authDomain: 'test-chat-96c62.firebaseapp.com',
	projectId: 'test-chat-96c62',
	storageBucket: 'test-chat-96c62.firebasestorage.app',
	messagingSenderId: '449823702743',
	appId: '1:449823702743:web:0b4c55273757ac005c7a92'
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const loginPanel = document.querySelector('#login-panel');
const dashboard = document.querySelector('#dashboard');
const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');
const dashboardMessage = document.querySelector('#dashboard-message');
const ordersBody = document.querySelector('#orders-body');
const emptyMessage = document.querySelector('#empty-message');
const orderCount = document.querySelector('#order-count');
const signupCount = document.querySelector('#signup-count');
const latestDate = document.querySelector('#latest-date');

function formatDate(timestamp) {
	if (!timestamp) return 'Pending';
	const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
	return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function escapeHtml(value) {
	return String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

async function loadDashboard() {
	dashboardMessage.textContent = '';
	ordersBody.innerHTML = '';
	try {
		const [ordersSnapshot, signupsSnapshot] = await Promise.all([
			db.collection('orders').orderBy('createdAt', 'desc').limit(100).get(),
			db.collection('signups').get()
		]);
		const orders = ordersSnapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
		orderCount.textContent = ordersSnapshot.size;
		signupCount.textContent = signupsSnapshot.size;
		latestDate.textContent = orders[0] ? formatDate(orders[0].createdAt).split(',')[0] : '-';
		emptyMessage.hidden = orders.length > 0;
		ordersBody.innerHTML = orders.map((order) => `<tr><td>${escapeHtml(order.email)}</td><td>${escapeHtml(order.species || order.animalType)}</td><td>${escapeHtml(order.quantity)}</td><td>${escapeHtml(order.notes || 'No note')}</td><td>${escapeHtml(formatDate(order.createdAt))}</td></tr>`).join('');
	} catch (error) {
		console.error(error);
		dashboardMessage.textContent = error.code === 'permission-denied' ? 'This account is signed in but does not have the admin claim.' : 'Could not load submissions. Check Firebase configuration and rules.';
	}
}

loginForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	loginMessage.textContent = '';
	try {
		await auth.signInWithEmailAndPassword(document.querySelector('#login-email').value.trim(), document.querySelector('#login-password').value);
	} catch (error) {
		loginMessage.textContent = error.code === 'auth/invalid-credential' ? 'Email or password is incorrect.' : 'Sign-in failed. Check the Firebase Auth setup.';
	}
});

document.querySelector('#sign-out').addEventListener('click', () => auth.signOut());
document.querySelector('#refresh-data').addEventListener('click', loadDashboard);
auth.onAuthStateChanged((user) => {
	const signedIn = Boolean(user);
	loginPanel.hidden = signedIn;
	dashboard.hidden = !signedIn;
	if (signedIn) loadDashboard();
});
