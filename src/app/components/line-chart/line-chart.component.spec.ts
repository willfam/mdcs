import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineChartComponent, LineChartDataPoint } from './line-chart.component';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { SimpleChange } from '@angular/core';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  const mockData: LineChartDataPoint[] = [
    { x: 'Jan', y: 10 },
    { x: 'Feb', y: 20 },
    { x: 'Mar', y: 15 },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartComponent, BaseChartDirective],
      providers: [provideCharts(withDefaultRegisterables())]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default chart type as line', () => {
    expect(component.chartType).toBe('line');
  });

  it('should have default dimensions', () => {
    expect(component.height).toBe(400);
    expect(component.width).toBe(800);
  });

  it('should setup chart data from input on init', () => {
    component.data = mockData;
    component.ngOnInit();

    expect(component.chartData.labels).toEqual(['Jan', 'Feb', 'Mar']);
    expect(component.chartData.datasets!.length).toBe(1);
    expect(component.chartData.datasets![0].data).toEqual([10, 20, 15]);
  });

  it('should reconfigure on data changes with different length', () => {
    const newData = [{ x: 'Apr', y: 25 }];
    component.data = newData;
    component.ngOnChanges({
      data: new SimpleChange(mockData, newData, false),
    });
    expect(component.chartData.labels).toEqual(['Apr']);
  });

  it('should not reconfigure when data length is unchanged', () => {
    const sameLenData = [{ x: 'A', y: 1 }, { x: 'B', y: 2 }, { x: 'C', y: 3 }];
    spyOn<any>(component, 'setupChart');
    component.ngOnChanges({
      data: new SimpleChange(mockData, sameLenData, false),
    });
    expect(component['setupChart']).not.toHaveBeenCalled();
  });

  it('should reconfigure on config changes', () => {
    const newConfig = { title: 'New Title' };
    component.config = newConfig;
    component.data = mockData;
    component.ngOnChanges({
      config: new SimpleChange({ title: '' }, newConfig, false),
    });
    expect(component.chartOptions!.plugins!.title!.display).toBeTrue();
  });

  it('should apply custom border color from config', () => {
    component.config = { borderColor: '#ff0000' };
    component.data = mockData;
    component.ngOnInit();
    expect(component.chartData.datasets![0].borderColor).toBe('#ff0000');
  });

  it('should handle chartClicked without error', () => {
    expect(() => component.chartClicked({ event: undefined, active: [] })).not.toThrow();
  });

  it('should handle chartHovered without error', () => {
    expect(() => component.chartHovered({ event: undefined, active: [] })).not.toThrow();
  });
});
