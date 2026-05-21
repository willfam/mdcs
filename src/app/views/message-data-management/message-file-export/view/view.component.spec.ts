import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DepoService } from '@app/services/depo.service';
import { MasterService } from '@app/services/master.service';
import { CommonService } from '@app/services/common.service';
import { MessageService } from '@app/services/message.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MessageFileExportViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockMasterService: jasmine.SpyObj<MasterService>;
  let mockDepoService: jasmine.SpyObj<DepoService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockStore: jasmine.SpyObj<Store>;

  const mockDialogData = {
    success_files: [
      { messageFileName: 'file1.dat', depotId: '1', sequenceNo: '001', modifiedDateTime: '2024-01-01', status: 'Success', description: '' },
    ],
    failed_files: [
      { messageFileName: 'file2.dat', depotId: '2', sequenceNo: '002', modifiedDateTime: '2024-01-01', status: 'Failed', description: 'error' },
    ],
  };

  beforeEach(waitForAsync(() => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);
    mockMasterService = jasmine.createSpyObj('MasterService', ['find']);
    mockDepoService = jasmine.createSpyObj('DepoService', [], {
      depoList$: of([]),
    });
    mockCommonService = jasmine.createSpyObj('CommonService', ['validateBusNumber']);
    mockMessageService = jasmine.createSpyObj('MessageService', ['confirmation']);
    mockStore = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, BrowserAnimationsModule, ViewComponent],
      providers: [
        FormBuilder,
        { provide: MatDialog, useValue: mockDialog },
        { provide: MasterService, useValue: mockMasterService },
        { provide: DepoService, useValue: mockDepoService },
        { provide: CommonService, useValue: mockCommonService },
        { provide: MessageService, useValue: mockMessageService },
        { provide: Store, useValue: mockStore },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set successDataSource and failedDataSource on init', () => {
    expect(component.successDataSource).toEqual(mockDialogData.success_files);
    expect(component.failedDataSource).toEqual(mockDialogData.failed_files);
  });

  it('should update tabIdx on tab change', () => {
    component.onTabChange({ index: 1 } as any);
    expect(component.tabIdx).toBe(1);
  });
});
