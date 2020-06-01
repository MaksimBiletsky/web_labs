import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeSearchComponent } from './shoe-search.component';

fdescribe('ShoeSearchComponent', () => {
  let component: ShoeSearchComponent;
  let fixture: ComponentFixture<ShoeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should trim search value', () => {
    component.searchValue = '  IIII IIII  ';
    component.onSearch();
    expect(component.searchValue).toEqual('IIII IIII');
  });
});
