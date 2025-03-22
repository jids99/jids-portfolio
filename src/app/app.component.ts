import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jids-portfolio';
  dpLink: string = 'assets/images/dp.jpg';

  word1Value: string = "Stuff ";
  animateClass: string = '';

  word1Arr: string[] = ["Stuff ", "Web stuff", "Web Design ", "UI/UX", "Graphic Design ", "whatever."];

  currentIndex: number = 0;

  ngOnInit() {
    this.startLoop();
  }

  startLoop() {
      setTimeout(() => {
      this.animateClass = '';
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.word1Arr.length; 
        this.word1Value = this.word1Arr[this.currentIndex];
        this.animateClass = 'word';
      }, 10);

        this.startLoop();

    }, 1600);
  }

}