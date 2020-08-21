import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scratch',
  templateUrl: './scratch.component.html',
  styleUrls: ['./scratch.component.css']
})

export class ScratchComponent implements OnInit {
  panelOpenState = false;
  expandRows = 1;


  constructor() { }

  ngOnInit(): void {
    this.expandRows=1;
  }

}
