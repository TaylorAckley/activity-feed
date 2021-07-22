import { TestBed } from '@angular/core/testing';

import { XhrErrorInterceptor } from './xhr-error.interceptor';

describe('XhrErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      XhrErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: XhrErrorInterceptor = TestBed.inject(XhrErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
