import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MasonryModule } from '@thisissoon/angular-masonry';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';

// Merge appConfig providers with additional providers
const mergedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Include existing providers from appConfig
    importProvidersFrom(MasonryModule), // Add MasonryModule
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // Initialize Firebase
    provideFirestore(() => getFirestore()), // Provide Firestore
  ],
};

// Bootstrap the application with the merged configuration
bootstrapApplication(AppComponent, mergedConfig).catch((err) => console.error(err));