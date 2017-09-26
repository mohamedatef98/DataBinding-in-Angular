import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-enter',
  templateUrl: './base-enter.component.html',
  styleUrls: ['./base-enter.component.css']
})
export class BaseEnterComponent implements OnInit {

  @Output() mechanicalStudentAdded = new EventEmitter <{name:string, grade:number,major:string,id:number}>();
  @Output() electricalStudentAdded = new EventEmitter <{name:string, grade:number,major:string,id:number}>();

  name = "";
  grade = 0;
  id = 0;
  constructor() { }

  addMechanicalStudent(){
    this.mechanicalStudentAdded.emit({name:this.name, grade:this.grade,major:'mechanical',id:this.id});
    this.id = this.id + 1;
  }
  addElectricalStudent(){
    this.electricalStudentAdded.emit({name:this.name, grade:this.grade,major:'electrical',id:this.id});
    this.id = this.id + 1;
  }
  ngOnInit() {
  }

}
