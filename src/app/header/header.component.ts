import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule] // Add CommonModule here
})
export class HeaderComponent implements OnInit, OnDestroy {
  daughter1 = 'Jael';
  daughter2 = 'Lael';
  countdown = '';
  private countdownInterval: any;

  images = [
    '../../assets/images/08.jpg',
    '../../assets/images/photo1.JPG',
    '../../assets/images/photo5.jpg', 
    '../../assets/images/jael@6.jpg',
   
  ];
  
  currentImageIndex = 0;
  private slideshowInterval: any;

  ngOnInit(): void {
    this.startCountdown();
    this.startSlideshow();
  }

  startCountdown(): void {
    const birthday = new Date('2025-03-21T21:00:00').getTime();

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthday - now;

      if (distance < 0) {
        this.countdown = '🎉 Happy Birthday! 🎉';
        clearInterval(this.countdownInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    }, 1000);
  }

  startSlideshow(): void {
    this.slideshowInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    if (this.slideshowInterval) clearInterval(this.slideshowInterval);
  }
}
