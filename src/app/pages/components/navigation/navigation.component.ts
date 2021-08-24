import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // @ViewChild('controlUsuario', {static: false}) controlUsuario: ModalLoginComponent
  constructor() { }

  ngOnInit(): void {
  }

  // abrirModalUsuario(){
  //   this.controlUsuario.abrirModal();
  // }
}
