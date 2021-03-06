import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
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
import { FormsModule } from '@angular/forms';
import { NewCommentComponent } from './core/components/posts/new-comment/new-comment.component';
import { CommentComponent } from './core/components/posts/comment/comment.component';
import { CommentContainerComponent } from './core/components/posts/comment-container/comment-container.component';
import { ToastrModule } from 'ngx-toastr';
import { XhrErrorInterceptor } from './extensions/xhr-error.interceptor';
import { PostAsideComponent } from './core/components/posts/post-aside/post-aside.component';
import { UpdatePostComponent } from './core/components/posts/update-post/update-post.component';

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
    NewCommentComponent,
    CommentComponent,
    CommentContainerComponent,
    PostAsideComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      redirectUri: window.location.origin,
      audience: 'localhost:4200',
      httpInterceptor: {
        allowedList: [
          '*',
        ]
      }
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
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: XhrErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
