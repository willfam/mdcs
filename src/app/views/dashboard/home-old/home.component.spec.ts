import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Router } from '@angular/router';
import DummyData from '@data/db.json';
import { IDepoList } from '@models/depo';
import { DepoService } from '@services/depo.service';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockDepoService: jasmine.SpyObj<DepoService>;

  const mockDepots: IDepoList[] = DummyData.depot_list;

  beforeEach(waitForAsync(() => {
    mockDepoService = jasmine.createSpyObj('DepoService', ['depoList$']);

    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [
        { provide: DepoService, useValue: mockDepoService },
        provideRouter([]),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .overrideComponent(HomeComponent, {
      set: { template: '<div></div>' },
    })
    .compileComponents();

    mockDepoService.depoList$ = of(mockDepots);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load depots on init', () => {
    component.ngOnInit();
    fixture.detectChanges();

    mockDepoService.depoList$.subscribe(depots => {
      expect(component.depots).toEqual(mockDepots);
    });
  });

  it('should navigate to the selected depot dashboard', () => {
    const routerStub: Router = TestBed.inject(Router);
    spyOn(routerStub, 'navigate').and.callThrough();

    component.handleSelectDepot({ value: '1' });
    expect(routerStub.navigate).toHaveBeenCalledWith(['/dacs/dashboard', '1']);
  });

  it('should update chart data on randomize', () => {
    const originalData = [...component.barChartData.datasets[0].data];
    component.randomize();
    expect(component.barChartData.datasets[0].data).not.toEqual(originalData);
  });

  it('should have events defined', () => {
    expect(component.events.length).toBe(3);
  });

  it('should have taskList defined', () => {
    expect(component.taskList.length).toBe(3);
  });

  it('should have quickLinks defined', () => {
    expect(component.quickLinks.length).toBe(5);
  });

  it('should have depotsForChart defined', () => {
    expect(component.depotsForChart.length).toBe(8);
  });

  it('should have barChartData with labels and datasets', () => {
    expect(component.barChartData.labels?.length).toBe(8);
    expect(component.barChartData.datasets[0].data.length).toBe(8);
  });
});
