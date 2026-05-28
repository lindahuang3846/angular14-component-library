import { TestBed } from '@angular/core/testing';

import { MyUiComponentsService } from './my-ui-components.service';

describe('MyUiComponentsService', () => {
  let service: MyUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
