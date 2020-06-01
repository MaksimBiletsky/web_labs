import { TestBed } from '@angular/core/testing';

import { ShoppingService } from './shopping.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

let httpMock: HttpTestingController;
let shoppingService: ShoppingService;

fdescribe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule],
      providers: [ShoppingService]
    });
    shoppingService = TestBed.get(ShoppingService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ShoppingService = TestBed.get(ShoppingService);
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
    const service: ShoppingService = TestBed.get(ShoppingService);
    expect(service.getData).toBeTruthy();
  });
  it('getData() should http GET JSON', () => {

    const names = [{name: 'a'}, {name: 'b'}];

    shoppingService.getData().subscribe((res) => {
      expect(res).toEqual(names);
    });

    const req = httpMock.expectOne('http://localhost:8000/move/shoe/');
    expect(req.request.method).toEqual("GET");
    req.flush(names);

    httpMock.verify();
  });
});
