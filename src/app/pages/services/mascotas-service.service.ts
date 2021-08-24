import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MascotasServiceService {

  constructor(private http: HttpClient) { }

  
getMascotas(){
  return this.http.get(`https://app-keneth.herokuapp.com/getAllpets`)
}
    
}

