import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students:{name:string,grade:number,major:string,id:number}[] = [];

  
  /* students:{name:string,grade:number,major:string}[] = [
    {
      name:"Mohamed",
      grade:1207,
      major:"electrical"
    },
    {
      name:"Ahmed",
      grade:1400,
      major:"mechanical"
    },
    {
      name:"Adham",
      grade:1300,
      major:"mechanical"
    },
    {
      name:"Farah",
      grade:1380,
      major:"electrical"
    },
    
  ];
 */
}
