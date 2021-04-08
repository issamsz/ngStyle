import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  color = '';
  fonte = ''+'px';
  font = '';

  constructor() { }

  ngOnInit(): void {
  }



maCouleur = (couleur: any): void  => {
this.color= couleur;
}

monFont = (size: any): void  => {
  this.fonte= size;
  }

  monFontF = (siz: any): void  => {
    this.font= siz;
    }



}
