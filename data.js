import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
getDocs
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

async function loadPublicBranches(){

    const snapshot = await getDocs(collection(db, "branches"));

    let container = document.getElementById("links");

    container.innerHTML = "";

    snapshot.forEach((d)=>{

        let b = d.data();

        container.innerHTML += `
        <a href="${b.map}" class="btn">
            ${b.name}
        </a>
        `;
    });
}

window.onload = loadPublicBranches;
