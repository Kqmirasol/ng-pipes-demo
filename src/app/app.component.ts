import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // adding the parameters
  presentDate = new Date();
  time$ = interval(1000).pipe(map(() => new Date()));

  // Currency Pipe
  price : number = 20000; ngOnInit() {
  }
  // Slice Pipe
  Fruits = ['Apple', 'Orange', 'Grapes','Mango', 'Kiwi', 'Pomegranate'];
  //Decimal Pipe
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  //Percent Pipe
  percentNum1: number = 0.259;
  percentNum2: number = 0.75;
  //Json Pipe | KeyValue Pipe
  object: any = {};

  testArray = [1, 2, 3, 4, 5, 6];

  testObject = {
    name: 'Karlo',
    age: 20,
    food: 'Burger'
  };
}
