import { TestBed } from '@angular/core/testing';

import { StoreMessagesService } from './store-messages.service';

describe('StoreMessagesService', () => {
  let service: StoreMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
