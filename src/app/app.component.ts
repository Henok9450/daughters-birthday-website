import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

import { WishesComponent } from './wishes/wishes.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialMessageComponent } from './special-message/special-message.component';
import { FirebaseService } from './firebase.service'; // Import Firebase Service


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    GalleryComponent,
    WishesComponent,
    FooterComponent,
    SpecialMessageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daughters-birthday-website';

  constructor(private firebaseService: FirebaseService) {
    // Firebase initialization will happen in the service
  }
}
