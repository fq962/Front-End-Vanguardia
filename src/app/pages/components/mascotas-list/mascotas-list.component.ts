import { Component, OnInit } from '@angular/core';
import { MascotasServiceService } from '../../services/mascotas-service.service';

@Component({
  selector: 'app-mascotas-list',
  templateUrl: './mascotas-list.component.html',
  styleUrls: ['./mascotas-list.component.css']
})
export class MascotasListComponent implements OnInit {

  mascotas: any = [];
  constructor(private mascotasServiceService: MascotasServiceService) {
   }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas() {
    this.mascotasServiceService.getMascotas().subscribe(
      res => {
        this.mascotas = res;
      },
      err => console.error(err)
    );
  }

}
