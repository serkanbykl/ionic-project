/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountserviceService } from './accountservice.service';

describe('Service: Accountservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountserviceService]
    });
  });

  it('should ...', inject([AccountserviceService], (service: AccountserviceService) => {
    expect(service).toBeTruthy();
  }));
});
