import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Client } from '../Client';
import { Observable, of,  } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:5000/clients/'
   httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  

  constructor( private http: HttpClient, private messageService: MessageService) { }
  
  getClients(clientId:number, filter=''): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl, {
      params: new HttpParams()
      .set('clientId', clientId.toString())
      .set('filter', filter)
    }).pipe()
  }
  getClientss(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl)
  
  }

  getClientNo404<Data>(id: number): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Client[]>(url)
    .pipe(
      map(clients => clients[0]),
      tap(h => {
        const outcome = h ? 'fetched': 'did not found';
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<Client>(`getClient id=${id}`))
    );
  }

  getClient(id: number): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      tap(_ => this.log(`fetched client id = ${id}`)),
      catchError(this.handleError<Client>(`getClient is${id}`))
    );
  }



  addClient(client: Client): Observable<Client>{
    return this.http.post<Client>(this.apiUrl, client, this.httpOptions);
  }

  deleteClient(id: number): Observable<Client>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Client>(url);

  }

  updateClient(client: Client, id: number): Observable<Client>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Client>(url, client)
    
  }




// @param operation
// @param result


private handleError<T>(operation ='operation', result?: T){
  return(error: any): Observable<T> =>{
    console.error(error);
    this.log(`${operation }failed: ${error.message}`);
    
  return of(result as T);
  };
  
}
private log(message: string) {
  this.messageService.add(`ClientService: ${message}`);
}

}