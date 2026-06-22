import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvV18awCYpoXyDjpM4r2HKRztNxg8UgW8",
  authDomain: "breadfast-coffee.firebaseapp.com",
  projectId: "breadfast-coffee",
  storageBucket: "breadfast-coffee.firebasestorage.app",
  messagingSenderId: "803906042715",
  appId: "1:803906042715:web:1e8977716adc54947b787e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.branches = [];

// ⚡ REALTIME LISTENER
onSnapshot(collection(db, "branches"), (snapshot) => {

    let data = [];

    snapshot.forEach(doc => {
        data.push({
            id: doc.id,
            ...doc.data()
        });
    });

    window.branches = data;

    // 🔥 لو الصفحة جاهزة اعرض فوراً
    if (typeof renderBranches === "function") {
        renderBranches(window.branches);
    }

});
