import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
apiKey: "AIzaSyB5O4jKvqP3K4rJ8gEB5q86jXevFKtOPiM",
authDomain: "driftmark.firebaseapp.com",
databaseURL: "https://driftmark-default-rtdb.firebaseio.com",
projectId: "driftmark",
storageBucket: "driftmark.appspot.com",
messagingSenderId: "948744843843",
appId: "1:948744843843:web:2b18364e25a6d422f01af6",
measurementId: "G-1ZYPF8NB7L"
};

const app = initializeApp(firebaseConfig);
const resumeStorage = getStorage(app)
const analytics = getAnalytics(app);

export {resumeStorage, analytics}