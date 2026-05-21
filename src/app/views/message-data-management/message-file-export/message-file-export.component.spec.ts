import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { IFile } from '@app/models/parameter-management';
import { MessageImportExportService } from '@app/services/message-import-export.service';
import { FilterService } from '@app/services/filter.service';
import { PaginationService } from '@app/services/pagination.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MessageFileExportComponent } from './message-file-export.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MessageFileExportComponent', () => {
  let component: MessageFileExportComponent;
  let fixture: ComponentFixture<MessageFileExportComponent>;
  let mockImportExportService: jasmine.SpyObj<MessageImportExportService>;
  let mockPaginationService: jasmine.SpyObj<PaginationService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockFilterService: jasmine.SpyObj<FilterService>;

  beforeEach(waitForAsync(() => {
    mockImportExportService = jasmine.createSpyObj(
      'MessageImportExportService',
      ['search', 'sendExportRequest']
    );
    mockPaginationService = jasmine.createSpyObj('PaginationService', [
      'handlePageEvent', 'getTotalPages', 'clearPagination', 'loadData', 'paginateData',
    ], { currentPage: 1, pageSize: 10, totalItems: 0 });
    mockDialog = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);
    mockStore = jasmine.createSpyObj('Store', ['dispatch']);
    mockPaginationService.getTotalPages.and.returnValue(0);
    mockFilterService = jasmine.createSpyObj('FilterService', ['updateSearchValue', 'clearSelectedFilters'], {
      searchValue$: of(''),
      filterValues$: of({}),
    });

    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MessageFileExportComponent],
      providers: [
        {
          provide: MessageImportExportService,
          useValue: mockImportExportService,
        },
        { provide: PaginationService, useValue: mockPaginationService },
        { provide: MatDialog, useValue: mockDialog },
        { provide: Store, useValue: mockStore },
        { provide: FilterService, useValue: mockFilterService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFileExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call subscribeToDepoChanges and loadFilterValues on init', () => {
    spyOn(component, 'subscribeToDepoChanges');
    spyOn(component, 'loadFilterValues');
    component.ngOnInit();
    expect(component.subscribeToDepoChanges).toHaveBeenCalled();
    expect(component.loadFilterValues).toHaveBeenCalled();
  });

  it('should load filter configs with Live/Trial options', () => {
    component.loadFilterValues();
    expect(component.filterConfigs.length).toBe(1);
    expect(component.filterConfigs[0].controlName).toBe('type');
  });

  it('should open export dialog when downloadHandler is called', () => {
    component.downloadHandler();
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('should close dialog and show success snackbar after 5 seconds', fakeAsync(() => {
    component.downloadHandler();
    tick(5000);
    expect(mockDialog.closeAll).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalled();
    flush();
  }));

  it('should select an individual file when checked', () => {
    const mockEvent = { checked: true } as MatCheckboxChange;
    const mockFile: IFile = {
      id: 1,
      version: '1',
      fileId: '0x739A',
      parameterName: 'BUS_CSFA.SYS',
      type: 'Live',
      status: 'Exported',
      chk: false,
      description: 'test',
    };

    component.checkHandler(mockEvent, mockFile);
    expect(component.selection.length).toBe(1);
    expect(component.selection[0]).toEqual(mockFile);
  });

  it('should deselect an individual file when unchecked', () => {
    const mockFile: IFile = {
      id: 1,
      version: '1',
      fileId: '0x739A',
      parameterName: 'BUS_CSFA.SYS',
      type: 'Live',
      status: 'Exported',
      chk: false,
      description: 'test',
    };
    component.selection.push(mockFile);

    const mockEvent = { checked: false } as MatCheckboxChange;
    component.checkHandler(mockEvent, mockFile);
    expect(component.selection.length).toBe(0);
  });

  it('should select all files when checkAllHandler is checked', () => {
    component.dataSource = [
      { id: 1, version: '1', fileId: '1', parameterName: '', type: '', status: '', chk: false, description: '' },
      { id: 2, version: '2', fileId: '2', parameterName: '', type: '', status: '', chk: false, description: '' },
    ];
    const mockEvent = { checked: true } as MatCheckboxChange;
    component.checkAllHandler(mockEvent);
    expect(component.selection.length).toEqual(component.dataSource.length);
  });

  it('should deselect all files when checkAllHandler is unchecked', () => {
    const mockEvent = { checked: false } as MatCheckboxChange;
    component.checkAllHandler(mockEvent);
    expect(component.selection.length).toEqual(0);
  });

  it('should unsubscribe from observables on destroy', () => {
    spyOn(component['destroy$'], 'next').and.callThrough();
    spyOn(component['destroy$'], 'complete').and.callThrough();

    component.ngOnDestroy();

    expect(component['destroy$'].next).toHaveBeenCalled();
    expect(component['destroy$'].complete).toHaveBeenCalled();
  });
});
