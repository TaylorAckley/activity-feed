import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { selectAuthState } from '../../../store/auth/auth.selectors';

@Component({
  selector: 'activity-feed-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  isMenuCollapsed = false;
  isLoggedIn = false;
  faGithub = faGithub;
  faBars = faBars;
  authState$ = this.store.pipe(select(selectAuthState));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
