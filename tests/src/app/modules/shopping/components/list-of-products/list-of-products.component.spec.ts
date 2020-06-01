import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProductsComponent} from './list-of-products.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ShoppingService} from "../../services/shopping.service";

fdescribe('ListOfProductComponent', () => {
  let component: ListOfProductsComponent;
  let fixture: ComponentFixture<ListOfProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoppingService],
      declarations: [ ListOfProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
