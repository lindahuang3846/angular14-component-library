import { TestBed } from '@angular/core/testing';

import { BofaUiComponentsService } from './bofa-ui-components.service';

describe('BofaUiComponentsService', () => {
  let service: BofaUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BofaUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
