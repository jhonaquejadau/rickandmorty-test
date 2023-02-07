import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharacterDetail } from '@app/interfaces/index';
import { environment } from '@environments/index';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { 
  }
  filterCharacters(query:string = ""){
    return this.http.get<Character[]>(`${environment.baseUrl}/?name=${query}`)
  }
  allCharacters(page:number = 1) {
    return this.http.get<Character[]>(`${environment.baseUrl}/?page=${page}`)
  }
  getCharacter(id:number){
    return this.http.get<CharacterDetail[]>(`${environment.baseUrl}/${id}`)
  }
  getLocation(url:string) {
    return this.http.get(`${url}`)
  }
}
