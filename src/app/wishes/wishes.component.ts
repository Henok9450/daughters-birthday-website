import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';

@Component({
  selector: 'app-wishes',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {
  daughter1 = 'Jael'; 
  daughter2 = 'Lael'; 
  name = '';
  message = '';
  photo: string | ArrayBuffer | null = null; 
  photoName: string | null = null; 
  messages: { id: string, name: string, message: string, photo: string | null }[] = []; 
  birthday = new Date('2024-03-01'); 
  editingIndex: number | null = null; 

  // Using inject() to inject Firestore
  private db = inject(Firestore);

  ngOnInit(): void {
    this.loadMessages();
  }

  async loadMessages() {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'messages'));
      this.messages = []; // Clear existing messages
      querySnapshot.forEach((doc) => {
        this.messages.push({ id: doc.id, ...doc.data() } as any); // Include the document ID
      });
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.name && this.message && this.message.length <= 250) {
      try {
        // Generate initials if no photo is uploaded
        const initials = this.photo ? null : this.getInitials(this.name);
  
        if (this.editingIndex !== null) {
          // Update existing message
          const messageId = this.messages[this.editingIndex].id;
          await updateDoc(doc(this.db, 'messages', messageId), {
            name: this.name,
            message: this.message,
            photo: this.photo || initials // Use initials if no photo is uploaded
          });
          this.editingIndex = null; // Reset editing state
        } else {
          // Add new message
          await addDoc(collection(this.db, 'messages'), {
            name: this.name,
            message: this.message,
            photo: this.photo || initials // Use initials if no photo is uploaded
          });
        }
  
        // Clear the form after successful submission
        this.clearForm();
  
        // Reload messages to reflect changes
        this.loadMessages();
      } catch (error) {
        console.error('Error submitting message:', error);
      }
    }
  }

  clearForm(): void {
    this.name = '';
    this.message = '';
    this.photo = null;
    this.photoName = null;
  }

  async editMessage(index: number): Promise<void> {
    const message = this.messages[index];
    this.name = message.name;
    this.message = message.message;
    this.photo = message.photo;
    this.photoName = message.photo ? 'Uploaded Photo' : null; // Set the photo name
    this.editingIndex = index; // Set the editing index
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photo = reader.result; // Store the image as a URL
        this.photoName = file.name; // Store the file name
      };
      reader.readAsDataURL(file);
    }
    event.target.value = ''; // Clear the file input
  }

  isBirthdayPassed(): boolean {
    const today = new Date();
    return today >= this.birthday;
  }

  // Method to get initials from the name
  getInitials(name: string): string {
    const names = name.split(' ');
    let initials = '';
    if (names.length > 0) {
      initials += names[0].charAt(0).toUpperCase(); // First name initial
    }
    if (names.length > 1) {
      initials += names[1].charAt(0).toUpperCase(); // Middle name initial
    }
    return initials;
  }
}