# Nova Animal Field Guide

Nova is a responsive, static animal discovery website with searchable profiles, real animal photography, category and habitat filters, detail dialogs, and WhatsApp contact buttons.

## How to run
- Open the folder in VS Code.
- Open `index.html` in a browser, or use Live Server.
- Deploy the folder to Vercel as a static site. No build command is required.

## Vercel deployment

1. Import this project folder or its GitHub repository in Vercel.
2. Set **Framework Preset** to `Other`.
3. Leave **Build Command** empty.
4. Leave **Output Directory** empty or use `.`.
5. Click **Deploy**. Vercel will open `index.html` as the homepage.

The included `vercel.json` adds basic browser security headers. The Firebase CLI project alias is stored in `.firebaserc`, so rules can be deployed with:

```powershell
npx firebase-tools deploy --only firestore:rules
```

## WhatsApp

The WhatsApp buttons open a pre-filled message to Nova at `+234 813 658 9631`.

## Admin dashboard

Open `admin.html` to access the protected operations dashboard. In Firebase Console, enable **Authentication > Sign-in method > Email/Password** and create the administrator account.

The administrator account must receive the Firebase custom claim `admin: true` from a trusted server using the Firebase Admin SDK. Do not add this claim from browser code. The Firestore rules allow dashboard reads only for users with that claim.
