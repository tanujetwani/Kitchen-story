import { TestBed } from '@angular/core/testing';

import { KitchenStoryServiceService } from './kitchen-story-service.service';

describe('KitchenStoryServiceService', () => {
  let service: KitchenStoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchenStoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
