import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthFilterComponent } from './month-filter.component';

describe('MonthFilterComponent', () => {
  let component: MonthFilterComponent;
  let fixture: ComponentFixture<MonthFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a currentDate initialized', () => {
    expect(component.currentDate).toBeInstanceOf(Date);
  });

  it('should return formatted currentMonthYear string', () => {
    component.currentDate = new Date(2025, 0, 15); // Jan 2025
    expect(component.currentMonthYear).toBe('Jan 2025');
  });

  it('should decrease month on prevMonth()', () => {
    component.currentDate = new Date(2025, 5, 15); // Jun 2025
    component.prevMonth();
    expect(component.currentDate.getMonth()).toBe(4); // May
  });

  it('should increase month on nextMonth()', () => {
    component.currentDate = new Date(2025, 5, 15); // Jun 2025
    component.nextMonth();
    expect(component.currentDate.getMonth()).toBe(6); // Jul
  });

  it('should roll back year when going before January', () => {
    component.currentDate = new Date(2025, 0, 15); // Jan 2025
    component.prevMonth();
    expect(component.currentDate.getMonth()).toBe(11); // Dec
    expect(component.currentDate.getFullYear()).toBe(2024);
  });

  it('should roll forward year when going past December', () => {
    component.currentDate = new Date(2025, 11, 15); // Dec 2025
    component.nextMonth();
    expect(component.currentDate.getMonth()).toBe(0); // Jan
    expect(component.currentDate.getFullYear()).toBe(2026);
  });
});
