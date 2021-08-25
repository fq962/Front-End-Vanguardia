import { Component, OnInit} from '@angular/core';
import { MascotasServiceService } from '../../services/mascotas-service.service';
import { Mascotas } from '../../interfaces/interface';
import { Routes } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-mascotas-list',
  templateUrl: './mascotas-list.component.html',
  styleUrls: ['./mascotas-list.component.css']
})
export class MascotasListComponent implements OnInit{

   
  constructor(private darleNombre: MascotasServiceService ){ }


 ngOnInit () {}

}
