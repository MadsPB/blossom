import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailPickerItemComponent } from './thumbnail-picker-item.component';

describe('ThumbnailPickerItemComponent', () => {
  let component: ThumbnailPickerItemComponent;
  let fixture: ComponentFixture<ThumbnailPickerItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailPickerItemComponent]
    });
    fixture = TestBed.createComponent(ThumbnailPickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
