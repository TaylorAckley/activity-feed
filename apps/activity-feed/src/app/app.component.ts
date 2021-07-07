import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { forkJoin, zip } from 'rxjs';
import { AppState, initialAppState, selectAppState } from './store';
import { select, Store } from '@ngrx/store';
import { setUser } from './store/auth/auth.actions';



@Component({
  selector: 'activity-feed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = true;
  $selectAppState = this.store.pipe(select(selectAppState));
  appState: AppState = initialAppState;
  constructor(public auth: AuthService, private store: Store<AppState>) {}

  ngOnInit() {
    zip(
      this.auth.isAuthenticated$,
      this.auth.user$,
      this.auth.isLoading$
    )
      .subscribe(authData => this.setViewData(authData));
      this.$selectAppState.subscribe(appState => this.setState(appState))
      //this.auth.getAccessTokenSilently().subscribe(x => console.log(x))
  }


  setViewData(authData: any) {
    const [isAuthenticated, user, isAuthLoading] = authData;
    if(user) {
      this.store.dispatch(setUser({ user }))
    }
    this.loading = false;
  }

  setState(appState: AppState) {
    this.appState = appState;
  }

}
