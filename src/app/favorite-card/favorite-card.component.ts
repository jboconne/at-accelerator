import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowDetails} from '../types';

import {RouterLink} from '@angular/router';
import { CountdownPipe } from "../countdown.pipe";
import { ToggleFavoriteDirective } from '../toggle-favorite.directive';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CountdownPipe,ToggleFavoriteDirective],
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css']
})
export class FavoriteCardComponent {

  @Input({required: true})
  tvShowDetails!: TvShowDetails;

}