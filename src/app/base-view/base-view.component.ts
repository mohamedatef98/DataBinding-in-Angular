import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit {


  @Input() student:{name:string,grade:number};
  constructor() { }

 

  ngOnInit() {
  }

}
