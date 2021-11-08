import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

     apiKey: "AIzaSyBFfYLRFvDT30ZoypaL-r8KtmCn8Ec-m-o",
   
     authDomain: "example-12060.firebaseapp.com",
   
     databaseURL: "https://example-12060.firebaseio.com",
   
     projectId: "example-12060",
   
     storageBucket: "example-12060.appspot.com",
   
     messagingSenderId: "381082473594",
   
     appId: "1:381082473594:web:353217cf032432e08c17c3"
   
   };
   
   
   // Initialize Firebase
   
   const app = initializeApp(firebaseConfig);

   export let db = getFirestore(app);