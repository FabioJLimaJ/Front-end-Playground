import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCode } from './table-code';

describe('TableCode', () => {
  let component: TableCode;
  let fixture: ComponentFixture<TableCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
