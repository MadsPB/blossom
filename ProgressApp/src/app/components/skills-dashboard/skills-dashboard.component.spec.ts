import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDashboardComponent } from './skills-dashboard.component';

describe('SkillsDashboardComponent', () => {
  let component: SkillsDashboardComponent;
  let fixture: ComponentFixture<SkillsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsDashboardComponent]
    });
    fixture = TestBed.createComponent(SkillsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
