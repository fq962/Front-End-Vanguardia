import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Mascotas } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MascotasServiceService {

  constructor ( private https: HttpClient) {}

}

/*   api: string = 'https://app-keneth.herokuapp.com/getAllpets';

  constructor (private https: HttpClient) {}

  getAll(): Observable<any> {
    return this.https.get(this.api).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)

    } else {
      console.log(error.status)
    }
    return throwError(
      console.log('Something is wrong!'));
  }; */

/*   ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.https.get('https://app-keneth.herokuapp.com/getAllpets')
  .subscribe( (resp: any) => {
    console.log ( resp.data);
    this.resultados = resp.data;
  })
  } */



