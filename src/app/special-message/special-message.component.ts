import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-special-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-message.component.html',
  styleUrls: ['./special-message.component.css']
})
export class SpecialMessageComponent {
  daughter1 = 'Jael';
  daughter2 = 'Lael';

  messages = [
    { signer: 'Mom', text: 'Happy birthday my darlings! Wishing you a day filled with love and laughter. ❤️', photo: '../../assets/images/mom.jpg' },
    { signer: 'Dad', text: 'I’m so proud of you both! Enjoy your special day to the fullest! 🎂  እግዚአብሔር ይባርካችሁ ይጠብቃችሁ፤ እግዚአብሔር ፊቱን ያብራላችሁ፤ ይራራላችሁ፤ እግዚአብሔር ፊቱን ይመልስላችሁ፤ ሰላሙንም ይስጣችሁ።', photo: '../../assets/images/dad2.jpg' },
    
  ];
}
