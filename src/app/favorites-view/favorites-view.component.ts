import {Component, inject} from '@angular/core';
import {TvShowDetailsService} from '../tv-show-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-view',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css'],
 
})
export class FavoritesViewComponent {

  protected showDetails$ = inject(TvShowDetailsService).allTvShowDetails$;
}