import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAsideComponent } from './post-aside.component';

describe('PostAsideComponent', () => {
  let component: PostAsideComponent;
  let fixture: ComponentFixture<PostAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
