import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {

   }

   private apiUrl = 'http://localhost:8080/addcontacts';

  //method should be here so that the ts fiel will access this method
  addContact(acontact:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.apiUrl,acontact);
  }
  
}