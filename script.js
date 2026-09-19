const animals = [
	{ name: 'Shiba Inu', scientific: 'Canis lupus familiaris', category: 'dogs', habitat: 'home', label: 'Dog breed', color: 'coral', icon: '🐕', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=85', fact: 'A fox-like companion with a famously independent spirit.', detail: 'Shiba Inus are one of Japan’s oldest native breeds. Their bold personality, curled tail, and clean habits make them feel almost cat-like.' },
	{ name: 'Highland Cow', scientific: 'Bos taurus', category: 'farm', habitat: 'farm', label: 'Farm life', color: 'moss', icon: '🐂', image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=700&q=85', fact: 'A shaggy coat built for wild weather.', detail: 'Highland cattle thrive in cold, rough landscapes thanks to their long outer hair and warm undercoat. Their horns also help them forage through snow.' },
	{ name: 'Andalusian Horse', scientific: 'Equus ferus caballus', category: 'horses', habitat: 'farm', label: 'Horse breed', color: 'sky', icon: '🐎', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=700&q=85', fact: 'A graceful athlete with centuries of royal history.', detail: 'The Andalusian is known for elegant movement and calm intelligence. Its influence can be found in many modern horse breeds.' },
	{ name: 'Red Fox', scientific: 'Vulpes vulpes', category: 'wild', habitat: 'forest', label: 'Wild animal', color: 'amber', icon: '🦊', image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=700&q=85', fact: 'A clever neighbour with over 40 vocal calls.', detail: 'Red foxes use a rich language of sounds, scents, and body movements. Their vertical pupils and sensitive whiskers help them hunt at dusk.' },
	{ name: 'Axolotl', scientific: 'Ambystoma mexicanum', category: 'reptiles', habitat: 'ocean', label: 'Aquatic wonder', color: 'lilac', icon: '🦎', image: 'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?auto=format&fit=crop&w=700&q=85', fact: 'The aquatic salamander that can regrow a limb.', detail: 'Axolotls keep juvenile features for life and can regenerate parts of their heart, spinal cord, and brain.' },
	{ name: 'Samoyed', scientific: 'Canis lupus familiaris', category: 'dogs', habitat: 'home', label: 'Dog breed', color: 'cream', icon: '🐕', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=700&q=85', fact: 'A working dog with a smile shaped by survival.', detail: 'The Samoyed’s upturned mouth helps prevent drooling from freezing in Arctic temperatures. Its coat is insulating and weather-resistant.' },
	{ name: 'Giraffe', scientific: 'Giraffa camelopardalis', category: 'wild', habitat: 'savanna', label: 'Wild animal', color: 'sunset', icon: '🦒', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=700&q=85', fact: 'A gentle giant with a seven-metre view.', detail: 'Giraffes have the same number of neck vertebrae as humans: seven. Each one is simply much longer.' },
	{ name: 'Friesian Horse', scientific: 'Equus ferus caballus', category: 'horses', habitat: 'farm', label: 'Horse breed', color: 'plum', icon: '🐎', image: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&w=700&q=85', fact: 'A glossy black silhouette with feathered feet.', detail: 'Friesians originated in the Netherlands and are celebrated for dramatic movement, flowing manes, and gentle willingness to learn.' },
	{ name: 'Maine Coon', scientific: 'Felis catus', category: 'cats', habitat: 'home', label: 'Cat breed', color: 'sky', icon: '🐈', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=85', fact: 'A gentle giant with tufted ears and a lion-like ruff.', detail: 'Maine Coons are one of the largest domestic cat breeds. Their long coats and oversized paws evolved for cold northeastern winters.' },
	{ name: 'African Grey Parrot', scientific: 'Psittacus erithacus', category: 'birds', habitat: 'forest', label: 'Bird', color: 'lilac', icon: '🦜', image: 'https://images.unsplash.com/photo-1544923408-75c5cef46f14?auto=format&fit=crop&w=700&q=85', fact: 'A brilliant talker with a remarkable memory.', detail: 'African grey parrots are among the most intelligent birds. They can learn sounds, solve puzzles, and form deep social bonds.' },
	{ name: 'African Elephant', scientific: 'Loxodonta africana', category: 'wild', habitat: 'savanna', label: 'Wild animal', color: 'moss', icon: '🐘', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=700&q=85', fact: 'A family-minded giant guided by powerful memory.', detail: 'Elephant families are led by experienced females. Their low rumbles can travel across great distances through the ground.' },
	{ name: 'Bottlenose Dolphin', scientific: 'Tursiops truncatus', category: 'ocean', habitat: 'ocean', label: 'Ocean life', color: 'sky', icon: '🐬', image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=700&q=85', fact: 'A social ocean explorer with its own signature whistle.', detail: 'Bottlenose dolphins use unique whistles as names. They cooperate in groups and can rest one half of their brain at a time.' },
	{ name: 'Snow Leopard', scientific: 'Panthera uncia', category: 'wild', habitat: 'mountains', label: 'Wild animal', color: 'cream', icon: '🐆', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=700&q=85', fact: 'A mountain phantom with a tail like a scarf.', detail: 'Snow leopards use their long tails for balance on rocky slopes and as a warm wrap while resting in freezing weather.' },
	{ name: 'Green Sea Turtle', scientific: 'Chelonia mydas', category: 'reptiles', habitat: 'ocean', label: 'Ocean life', color: 'moss', icon: '🐢', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85', fact: 'An ancient navigator that returns to its birthplace.', detail: 'Green sea turtles can travel thousands of kilometres and use Earth’s magnetic field to help find their way home.' },
	{ name: 'Emperor Penguin', scientific: 'Aptenodytes forsteri', category: 'birds', habitat: 'mountains', label: 'Bird', color: 'sky', icon: '🐧', image: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=700&q=85', fact: 'A patient parent built for the coldest place on Earth.', detail: 'Emperor penguin fathers balance a single egg on their feet through the Antarctic winter while their partner feeds at sea.' },
	{ name: 'Dromedary Camel', scientific: 'Camelus dromedarius', category: 'farm', habitat: 'desert', label: 'Desert animal', color: 'amber', icon: '🐪', image: 'https://images.unsplash.com/photo-1551720260-67b5c7c6d2e7?auto=format&fit=crop&w=700&q=85', fact: 'A desert traveller with three layers of eyelids.', detail: 'Camels have long eyelashes, closable nostrils, and wide feet that help them cross sand. Their hump stores fat, not water.' },
	{ name: 'Monarch Butterfly', scientific: 'Danaus plexippus', category: 'insects', habitat: 'forest', label: 'Insect', color: 'coral', icon: '🦋', image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=700&q=85', fact: 'A tiny traveller crossing generations on one journey.', detail: 'Monarchs migrate across North America, but the journey takes several generations. Each butterfly follows an inherited route.' },
	{ name: 'Mountain Goat', scientific: 'Oreamnos americanus', category: 'farm', habitat: 'mountains', label: 'Mountain animal', color: 'cream', icon: '🐐', image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=85', fact: 'A sure-footed climber with grippy split hooves.', detail: 'Mountain goats can climb slopes that look impossible. Their hooves spread wide and have soft centres for traction on stone.' },
	{ name: 'Red-Eyed Tree Frog', scientific: 'Agalychnis callidryas', category: 'reptiles', habitat: 'forest', label: 'Rainforest life', color: 'lilac', icon: '🐸', image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=700&q=85', fact: 'A bright-eyed night hunter with a dramatic disguise.', detail: 'When resting, this frog hides its vivid eyes and colourful sides. If startled, the sudden flash can confuse a predator.' },
	{ name: 'Honey Bee', scientific: 'Apis mellifera', category: 'insects', habitat: 'home', label: 'Insect', color: 'sunset', icon: '🐝', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=700&q=85', fact: 'A tiny architect that dances directions to food.', detail: 'Honey bees use a waggle dance to share the direction and distance of rich flowers. A hive can work as one remarkable superorganism.' }
];

const wonderFacts = [
	{ animal: 'Mimic octopus', label: 'Master of disguise', fact: 'It can imitate more than 15 different animals.', detail: 'By changing its colour, shape, and swimming style, this clever octopus can resemble a lionfish, flatfish, sea snake, or even a jellyfish to confuse predators.', image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Archerfish', label: 'Precision hunter', fact: 'It knocks insects from branches with a jet of water.', detail: 'An archerfish adjusts for the way light bends at the water surface, then fires a carefully aimed stream that can reach prey several body lengths away.', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Elephant', label: 'Long-distance family', fact: 'Its feet can sense distant rumbles through the ground.', detail: 'Elephants pick up low vibrations through sensitive tissue in their feet and trunks. These signals help herds communicate across surprisingly large distances.', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Pistol shrimp', label: 'Tiny thunder', fact: 'One snap creates a flash of light and a shockwave.', detail: 'The shrimp closes a specialised claw so quickly that the collapsing bubble briefly reaches temperatures comparable to the surface of the sun.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Lyrebird', label: 'Living sound artist', fact: 'It can copy chainsaws, camera shutters, and other birds.', detail: 'A male lyrebird builds an enormous sound library by listening to its surroundings. His performance is part courtship, part astonishing audio collage.', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Wombat', label: 'Unexpected engineer', fact: 'It is the only known animal that produces cube-shaped droppings.', detail: 'The unusual shape forms inside the last part of the wombat’s intestine. Cubes are less likely to roll away, helping wombats mark their territory on rocks and logs.', image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Mantis shrimp', label: 'Colour champion', fact: 'Its eyes detect types of light humans cannot see.', detail: 'Mantis shrimp can sense ultraviolet and polarised light. Their remarkable vision helps them navigate reefs and communicate in ways we are only beginning to understand.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Hummingbird', label: 'Backward flyer', fact: 'It is the only bird that can fly backwards on purpose.', detail: 'Its unique shoulder joints let the wings rotate in a full circle. A hummingbird can hover, reverse, and even fly upside down for brief moments.', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Cuttlefish', label: 'Shape-shifting artist', fact: 'It can change colour, pattern, and skin texture in seconds.', detail: 'Special cells in its skin work with tiny muscle-controlled bumps to create moving camouflage. Some cuttlefish even display different patterns to each other at once.', image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'New Caledonian crow', label: 'Tool maker', fact: 'It can shape leaves and twigs into tools for difficult jobs.', detail: 'These crows remember which tools work best and can solve multi-step puzzles. Young birds learn some techniques by watching experienced adults.', image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Narwhal', label: 'Arctic sensor', fact: 'Its famous tusk is actually a tooth filled with nerves.', detail: 'The tusk can grow several metres long and may help a narwhal sense changes in water pressure, temperature, and chemistry beneath the ice.', image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=1000&q=85' },
	{ animal: 'Star-nosed mole', label: 'Speed reader', fact: 'It can identify and eat prey in less than a quarter of a second.', detail: 'Twenty-two touch-sensitive rays surround its nose. Together they form one of the most sensitive touch organs known in the animal kingdom.', image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=85' }
];

const grid = document.querySelector('#animal-grid');
const search = document.querySelector('#animal-search');
const heroSearch = document.querySelector('#hero-search');
const categorySelect = document.querySelector('#category-select');
const habitatSelect = document.querySelector('#habitat-select');
const emptyState = document.querySelector('#empty-state');
const modal = document.querySelector('#animal-modal');
const modalContent = document.querySelector('#modal-content');
const interestForm = document.querySelector('#interest-form');
const animalType = document.querySelector('#animal-type');
const animalSpecies = document.querySelector('#animal-species');
const speciesLabel = document.querySelector('#species-label');
const emailLabel = document.querySelector('#email-label');
const interestEmail = document.querySelector('#interest-email');
const interestQuantity = document.querySelector('#interest-quantity');
const interestNotes = document.querySelector('#interest-notes');
const interestSubmit = document.querySelector('#interest-submit');
const formMessage = document.querySelector('#form-message');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = themeToggle.querySelector('span');
const wonderCard = document.querySelector('#wonder-card');
const wonderImage = document.querySelector('#wonder-image');
const wonderLabel = document.querySelector('#wonder-label');
const wonderAnimal = document.querySelector('#wonder-animal');
const wonderFact = document.querySelector('#wonder-fact');
const wonderDetail = document.querySelector('#wonder-detail');
const wonderNext = document.querySelector('#wonder-next');

function applyTheme(theme) {
	document.documentElement.dataset.theme = theme;
	const darkMode = theme === 'dark';
	themeIcon.textContent = darkMode ? '☀' : '☾';
	themeToggle.setAttribute('aria-label', darkMode ? 'Switch to light mode' : 'Switch to dark mode');
	themeToggle.setAttribute('title', darkMode ? 'Switch to light theme' : 'Switch to dark theme');
}

const savedTheme = localStorage.getItem('nova-theme');
const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(initialTheme);
themeToggle.addEventListener('click', () => {
	const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
	localStorage.setItem('nova-theme', nextTheme);
	applyTheme(nextTheme);
});

let wonderIndex = Math.floor(Math.random() * wonderFacts.length);

function renderWonder(index) {
	const wonder = wonderFacts[index];
	wonderCard.classList.add('is-changing');
	window.setTimeout(() => {
		wonderImage.src = wonder.image;
		wonderImage.alt = wonder.animal;
		wonderLabel.textContent = wonder.label;
		wonderAnimal.textContent = wonder.animal;
		wonderFact.textContent = wonder.fact;
		wonderDetail.textContent = wonder.detail;
		wonderCard.classList.remove('is-changing');
	}, 300);
}

function showNextWonder() {
	let nextIndex = wonderIndex;
	while (nextIndex === wonderIndex) {
		nextIndex = Math.floor(Math.random() * wonderFacts.length);
	}
	wonderIndex = nextIndex;
	renderWonder(wonderIndex);
}

wonderNext.addEventListener('click', showNextWonder);
renderWonder(wonderIndex);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let wonderTimer = null;
function startWonderRotation() {
	if (!reducedMotion.matches && !wonderTimer) {
		wonderTimer = window.setInterval(showNextWonder, 8000);
	}
}
function stopWonderRotation() {
	if (wonderTimer) {
		window.clearInterval(wonderTimer);
		wonderTimer = null;
	}
}
wonderCard.addEventListener('mouseenter', stopWonderRotation);
wonderCard.addEventListener('mouseleave', startWonderRotation);
wonderCard.addEventListener('focusin', stopWonderRotation);
wonderCard.addEventListener('focusout', startWonderRotation);
startWonderRotation();
document.addEventListener('keydown', (event) => {
	if (event.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
		event.preventDefault();
		heroSearch.focus();
	}
});

const speciesByType = {
	dog: ['Shiba Inu', 'Samoyed', 'Golden Retriever', 'German Shepherd'],
	cat: ['Maine Coon', 'British Shorthair', 'Ragdoll', 'Siamese'],
	horse: ['Andalusian Horse', 'Friesian Horse', 'Arabian Horse', 'Quarter Horse'],
	farm: ['Highland Cow', 'Mountain Goat', 'Alpaca', 'Dwarf Goat'],
	bird: ['African Grey Parrot', 'Emperor Penguin', 'Cockatiel', 'Canary'],
	wild: ['Red Fox', 'Giraffe', 'Snow Leopard', 'African Elephant']
};

const firebaseConfig = {
  apiKey: 'AIzaSyAnglsFxELNtqPLb_TyLdA5ggS_LgWJ1nA',
  authDomain: 'test-chat-96c62.firebaseapp.com',
  databaseURL: 'https://test-chat-96c62-default-rtdb.firebaseio.com',
  projectId: 'test-chat-96c62',
  storageBucket: 'test-chat-96c62.firebasestorage.app',
  messagingSenderId: '449823702743',
  appId: '1:449823702743:web:0b4c55273757ac005c7a92',
  measurementId: 'G-3B755LTFY1'
};

let db = null;

try {
	if (window.firebase) {
		firebase.initializeApp(firebaseConfig);
		db = firebase.firestore();
	}
} catch (error) {
	console.warn('Firebase not configured yet. Using local storage fallback.', error);
}

function renderAnimals() {
	const selectedFilter = document.querySelector('.filter-button.active').dataset.filter;
	const selectedCategory = categorySelect.value;
	const selectedHabitat = habitatSelect.value;
	const query = search.value.trim().toLowerCase();
	const visibleAnimals = animals.filter((animal) => {
		const matchesFilter = selectedFilter === 'all' || animal.category === selectedFilter;
		const matchesCategory = selectedCategory === 'all' || animal.category === selectedCategory;
		const matchesHabitat = selectedHabitat === 'all' || animal.habitat === selectedHabitat;
		const matchesSearch = `${animal.name} ${animal.label} ${animal.fact}`.toLowerCase().includes(query);
		return matchesFilter && matchesCategory && matchesHabitat && matchesSearch;
	});
	grid.innerHTML = visibleAnimals.map((animal, index) => `<article class="animal-card" data-index="${animals.indexOf(animal)}" style="--delay: ${index * 35}ms"><div class="animal-portrait ${animal.color}"><img src="${animal.image}" alt="${animal.name}" loading="lazy"><span class="portrait-fallback">${animal.icon}</span><span class="card-arrow">↗</span></div><div class="animal-card-copy"><p class="card-label">${animal.label}</p><h3>${animal.name}</h3><p>${animal.fact}</p><button class="learn-more" type="button">Read field note <span>→</span></button></div></article>`).join('');
	emptyState.hidden = visibleAnimals.length > 0;
	document.querySelectorAll('.animal-card').forEach((card) => card.addEventListener('click', () => openAnimal(animals[card.dataset.index])));
}

function openAnimal(animal) {
	modalContent.innerHTML = `<img class="modal-image" src="${animal.image}" alt="${animal.name}"><p class="eyebrow">${animal.label}</p><h2>${animal.name}</h2><p class="scientific">${animal.scientific}</p><p class="modal-fact">${animal.fact}</p><p>${animal.detail}</p>`;
	modal.showModal();
}

document.querySelectorAll('.filter-button').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter-button.active').classList.remove('active'); button.classList.add('active'); search.value = ''; heroSearch.value = ''; categorySelect.value = 'all'; habitatSelect.value = 'all'; renderAnimals(); }));
search.addEventListener('input', () => {
	heroSearch.value = search.value;
	if (search.value.trim()) {
		document.querySelector('.filter-button.active').classList.remove('active');
		document.querySelector('[data-filter="all"]').classList.add('active');
		categorySelect.value = 'all';
		habitatSelect.value = 'all';
	}
	renderAnimals();
});
heroSearch.addEventListener('input', () => {
	search.value = heroSearch.value;
	search.dispatchEvent(new Event('input'));
});
categorySelect.addEventListener('change', () => { document.querySelector('.filter-button.active').classList.remove('active'); document.querySelector('[data-filter="all"]').classList.add('active'); search.value = ''; heroSearch.value = ''; renderAnimals(); });
habitatSelect.addEventListener('change', () => { search.value = ''; heroSearch.value = ''; renderAnimals(); });
document.querySelector('#modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
function validateOrderForm() {
	const hasSpecies = Boolean(animalSpecies.value);
	const hasEmail = Boolean(interestEmail.value.trim()) && interestEmail.checkValidity();
	interestSubmit.disabled = !(hasSpecies && hasEmail);
	if (!hasSpecies) {
		formMessage.textContent = '';
		formMessage.classList.remove('success');
	}
}

animalType.addEventListener('change', () => {
	const choices = speciesByType[animalType.value] || [];
	animalSpecies.innerHTML = `<option value="">Choose a species or breed</option>${choices.map((species) => `<option value="${species}">${species}</option>`).join('')}`;
	speciesLabel.hidden = choices.length === 0;
	emailLabel.hidden = true;
	interestEmail.value = '';
	interestSubmit.disabled = true;
	formMessage.textContent = '';
	formMessage.classList.remove('success');
});
animalSpecies.addEventListener('change', () => {
	const hasSpecies = Boolean(animalSpecies.value);
	emailLabel.hidden = !hasSpecies;
	if (!hasSpecies) {
		interestEmail.value = '';
	}
	validateOrderForm();
	formMessage.textContent = hasSpecies ? 'Add your email to place the order request.' : '';
	formMessage.classList.remove('success');
});
interestEmail.addEventListener('input', validateOrderForm);

interestForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	const email = interestEmail.value.trim();
	const selectedSpecies = animalSpecies.value;
	const selectedType = animalType.value;
	const selectedQuantity = Number(interestQuantity.value) || 1;
	const notes = interestNotes.value.trim();
	const order = {
		email,
		animalType: selectedType,
		species: selectedSpecies,
		quantity: selectedQuantity,
		notes,
		createdAt: new Date().toISOString()
	};

	try {
		if (db) {
			await db.collection('signups').add({
				email,
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
			});
			await db.collection('orders').add({
				...order,
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
			});
			formMessage.textContent = `Thanks! ${email} is signed up and your order request for ${selectedSpecies} has been sent to Firebase.`;
		} else {
			const savedOrders = JSON.parse(localStorage.getItem('nova-orders') || '[]');
			savedOrders.unshift(order);
			localStorage.setItem('nova-orders', JSON.stringify(savedOrders));
			formMessage.textContent = `Thanks! ${email} is signed up and your order request for ${selectedSpecies} has been saved locally.`;
		}
		formMessage.classList.add('success');
		interestForm.reset();
		animalType.value = '';
		animalSpecies.innerHTML = '<option value="">Choose a type first</option>';
		speciesLabel.hidden = true;
		emailLabel.hidden = true;
		interestSubmit.disabled = true;
	} catch (error) {
		console.error('Order submission failed:', error);
		formMessage.textContent = 'There was a problem submitting your request. Please try again.';
		formMessage.classList.remove('success');
	}
});
renderAnimals();
