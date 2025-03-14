import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import Firestore module
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Make it available app-wide
})
export class WishesService {
  
  constructor(private firestore: AngularFirestore) { }

  // Method to add a new wish to Firestore
  addWish(name: string, message: string, imageUrl: string): Promise<void> {
    const wishId = this.firestore.createId(); // Create a unique ID for the wish
    const wishData = {
      name,
      message,
      imageUrl,
      timestamp: new Date()
    };
    
    return this.firestore.collection('wishes').doc(wishId).set(wishData); // Save wish to Firestore
  }

  // Method to get all wishes from Firestore
  getWishes(): Observable<any[]> {
    return this.firestore.collection('wishes', ref => ref.orderBy('timestamp', 'desc')).valueChanges(); // Retrieve wishes from Firestore
  }
}
