import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '@app/interfaces';
import { CharacterService } from '@app/shared';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];
  private query: string = '';

  constructor(
    private characterService: CharacterService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharacterSearched();
  }

  private getCharacterSearched(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log('params ->', params);
      this.query = params['input']
      this.getCharacters();
    });
  }

  private getCharacters(): void {
    this.characterService.searchCharacters(this.query).subscribe((res: any) => {
      // if (res && res.results.length > 0) or if (res?.results?.length)
      if (res?.results?.length) {
        console.log('repsonse -> ', res);
        this.characters = [...this.characters, ...res.results];
      } else {
        this.characters = [];
      }
    });
  }
}
