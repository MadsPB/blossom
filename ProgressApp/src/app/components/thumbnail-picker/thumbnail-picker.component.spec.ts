import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailPickerComponent } from './thumbnail-picker.component';

describe('ThumbnailPickerComponent', () => {
  let component: ThumbnailPickerComponent;
  let fixture: ComponentFixture<ThumbnailPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailPickerComponent]
    });
    fixture = TestBed.createComponent(ThumbnailPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
