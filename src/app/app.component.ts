import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test2';
  storedTheme: string | null=localStorage.getItem('theme-color');
  constructor() {}
  ngOnInit() {
  }
  setTheme(){
    if(this.storedTheme==='theme-dark'){
      //toggle and update local storage
      localStorage.setItem('theme-color','theme-light');
      this.storedTheme=localStorage.getItem('theme-color');

    }else{
      //toggle and update local storage
      localStorage.setItem('theme-color','theme-dark');
      this.storedTheme=localStorage.getItem('theme-color');
    }
  }

}
