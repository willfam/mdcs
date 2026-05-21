import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MessageImportExportService } from '@app/services/message-import-export.service';
import { PaginationService } from '@app/services/pagination.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MessageFileImportComponent } from './message-file-import.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MessageFileImportComponent', () => {
  let component: MessageFileImportComponent;
  let fixture: ComponentFixture<MessageFileImportComponent>;
  let mockImportExportService: jasmine.SpyObj<MessageImportExportService>;
  let mockPaginationService: jasmine.SpyObj<PaginationService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(waitForAsync(() => {
    mockImportExportService = jasmine.createSpyObj(
      'MessageImportExportService',
      ['search', 'getDepotService', 'import']
    );
    mockPaginationService = jasmine.createSpyObj('PaginationService', [
      'handlePageEvent', 'getTotalPages', 'clearPagination', 'loadData', 'paginateData',
    ], { currentPage: 1, pageSize: 10, totalItems: 0 });
    mockPaginationService.paginatedData$ = of([]);
    mockPaginationService.getTotalPages.and.returnValue(0);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);
    mockStore = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MessageFileImportComponent],
      providers: [
        {
          provide: MessageImportExportService,
          useValue: mockImportExportService,
        },
        { provide: PaginationService, useValue: mockPaginationService },
        { provide: MatDialog, useValue: mockDialog },
        { provide: Store, useValue: mockStore },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockImportExportService.getDepotService.and.returnValue(of([]));

    fixture = TestBed.createComponent(MessageFileImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadFilterValues on init', () => {
    spyOn(component, 'loadFilterValues').and.callThrough();
    component.ngOnInit();
    expect(component.loadFilterValues).toHaveBeenCalled();
  });

  it('should open a dialog when openView is called', () => {
    component.openView();
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('should unsubscribe from observables on destroy', () => {
    spyOn(component['destroy$'], 'next').and.callThrough();
    spyOn(component['destroy$'], 'complete').and.callThrough();

    component.ngOnDestroy();

    expect(component['destroy$'].next).toHaveBeenCalled();
    expect(component['destroy$'].complete).toHaveBeenCalled();
  });
});
