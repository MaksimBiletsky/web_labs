import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ShoppingService} from "../../shopping/services/shopping.service";

fdescribe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService],
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});