import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { environment } from '../environments/environment'; // Adjust if needed

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db;

  constructor() {
    const app = initializeApp(environment.firebaseConfig); // Using your Firebase config
    this.db = getFirestore(app);
  }

  // Method to add data to Firestore
  async addData(collectionName: string, data: any) {
    try {
      const docRef = await addDoc(collection(this.db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Method to retrieve data from Firestore
  async getData(collectionName: string) {
    const querySnapshot = await getDocs(collection(this.db, collectionName));
    const data = querySnapshot.docs.map(doc => doc.data());
    return data;
  }
}
