import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './core/components/login/login.component';
import { LoginButtonComponent } from './core/components/login/login-button/login-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavComponent } from './core/components/top-nav/top-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { reducers } from './store';
import { NoPostsComponent } from './core/components/posts/no-posts/no-posts.component';
import { NewPostComponent } from './core/components/posts/new-post/new-post.component';
import { FeedComponent } from './core/components/posts/feed/feed.component';
import { PostComponent } from './core/components/posts/post/post.component';
import { PostsContainerComponent } from './core/components/posts/posts-container/posts-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginButtonComponent,
    TopNavComponent,
    SpinnerComponent,
    FooterComponent,
    NoPostsComponent,
    NewPostComponent,
    FeedComponent,
    PostComponent,
    PostsContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
    }),
    NgbModule,
    FontAwesomeModule,
    StoreModule.forRoot(reducers,
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
