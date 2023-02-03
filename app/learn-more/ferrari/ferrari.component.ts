import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferrari',
  templateUrl: './ferrari.component.html',
  styleUrls: ['./ferrari.component.scss']
})
export class FerrariComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toOverview(){
    document.getElementById("sec2")?.scrollIntoView({behavior:"smooth"});
  }
  toKey()
  {
  document.getElementById("sec3")?.scrollIntoView({behavior:"smooth"});
  }
  toSummary(){
    document.getElementById("sec4")?.scrollIntoView({behavior:"smooth"});
  }
  toColours(){
    document.getElementById("sec5")?.scrollIntoView({behavior:"smooth"});
  }
  toMileage(){
    document.getElementById("sec6")?.scrollIntoView({behavior:"smooth"});
  }

}
