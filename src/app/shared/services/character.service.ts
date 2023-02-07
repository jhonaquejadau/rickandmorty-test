import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@app/interfaces/index';
import { environment } from '@environments/index';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { 
  }
  searchCharacters(query:string = ""){
    return this.http.get<Character[]>(`${environment.baseUrl}/?name=${query}`)
  }
}
