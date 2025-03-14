import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import Glide from '@glidejs/glide'; 

@Component({
  selector: 'app-gallery',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit, AfterViewInit {
  @ViewChild('galleryGlide', { static: false }) galleryGlide!: ElementRef;
  
  // Define the arrays to store images with metadata like src and alt
  OurImages: string[] = [
    '../../assets/images/01.jpg',
    '../../assets/images/09.jpg', 
    '../../assets/images/10.jpg',
    '../../assets/images/11.jpg',
    '../../assets/images/15.jpg',
    '../../assets/images/16.jpg'
  ];

  masonaryImages: string[] = [
    '../../assets/images/17.jpg',
    '../../assets/images/lael.jpg', 
    '../../assets/images/lael1.jpg',
    '../../assets/images/03.jpg',
    '../../assets/images/jaelat8.jpg',
    '../../assets/images/photo2.jpg', 
    '../../assets/images/photo3.jpg', 
    '../../assets/images/photo6.jpg',
    '../../assets/images/photo7.jpg',
    '../../assets/images/06.jpg', 
    '../../assets/images/07.jpg', 
    '../../assets/images/14.jpg', 
    '../../assets/images/18.jpg',
    '../../assets/images/13.jpg', 
    '../../assets/images/Jael1st.jpg', 
    '../../assets/images/02.jpg',
    '../../assets/images/Jaelandfamily.jpg',
    '../../assets/images/photo4.jpg' 
  ];

  ngOnInit(): void { 
  }

  ngAfterViewInit(): void {
    new Glide(this.galleryGlide.nativeElement, {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      autoplay: 3000,
      hoverpause: true,
      animationDuration: 1000,
      gap: 10,
    }).mount();

    new Glide('.gallery-slider', {
      type: 'carousel',
      autoplay: 3000,
      hoverpause: true,
      perView: 3,
      gap: 20,
      animationDuration: 1000,
      breakpoints: {
        1024: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }

  getRandomSize() {
    const sizes = ['h-40', 'h-56', 'h-72', 'h-96'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
}