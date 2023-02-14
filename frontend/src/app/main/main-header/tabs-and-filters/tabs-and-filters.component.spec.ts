import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAndFiltersComponent } from './tabs-and-filters.component';

describe('TabsAndFiltersComponent', () => {
  let component: TabsAndFiltersComponent;
  let fixture: ComponentFixture<TabsAndFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsAndFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsAndFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
