import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  birthdayDate = 'Friday, March 21, 2025';
  birthdayTime = '09:00 PM';
  locationLink = 'https://www.google.com/maps/@9.0154096,38.8833712,17z?entry=ttu';
  dressCode = 'Wear your favorite birthday-themed costume!';
  daughter1 = 'Jael';
  daughter2 = 'Lael';
  safeMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const embedUrl = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5572.7288249609555!2d38.88108786008622!3d9.016755647110266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnNTUuNSJOIDM4wrA1MycwMC4xIkU!5e0!3m2!1sam!2set!4v1739436810557!5m2!1sam!2set';
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
