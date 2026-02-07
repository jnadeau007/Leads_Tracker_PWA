# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

# Leads Tracker

Leads Tracker is a minimal, privacy-first app for saving and managing links. Save the active browser tab or paste URLs manually, view and open saved links, and clear your list with a double-click. Data is stored locally by default and can be synced to Firebase Realtime Database if configured. Built with plain HTML, CSS, and JavaScript, perfect as a small Chrome extension or standalone web app.

## Key features

- Save current tab: capture the active tab URL with one click.
- Manual entry: add links by pasting into the input.
- Persistent storage: localStorage by default, optional Firebase sync.
- Quick access: open saved links in new tabs.
- Easy reset: double-click to clear all leads.

## Tech stack & run

- Built with: HTML, CSS, and vanilla JavaScript.
- Optional: Firebase Realtime Database for syncing leads across devices.

Quick start (development):

```bash
npm install
npm run dev
# or simply open index.html in a browser
```

## Firebase Set up
1. Create a Firebase project at https://console.firebase.google.com/ and add a Web app to the project.
2. In Project settings → Your apps, copy the Firebase config object. It looks like:

```js
const firebaseconfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
	databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
	projectId: "YOUR_PROJECT_ID",
	storageBucket: "YOUR_PROJECT_ID.appspot.com",
	messagingSenderId: "SENDER_ID",
	appId: "APP_ID"
}
```

3. Open `index.js` and replace the placeholder values in the `firebaseconfig` object with the values you copied. If `index.js` still uses older Firebase imports, update it to the modular (v9) imports shown in the repo example.
4. In the Firebase console, enable Realtime Database (if using it) and set appropriate rules. For quick testing you can create the database and use test mode, but switch to secure rules for production.
5. Save changes and open the app in a browser. Check DevTools console for the test write/read logs (the repo includes a small `connectTest` write/read check).

Notes:
- Keep your `apiKey` and config in source only for development; consider environment-based configuration for production.
- If you want, paste your Firebase config here and I can insert it into `index.js` and run the connection test for you.





