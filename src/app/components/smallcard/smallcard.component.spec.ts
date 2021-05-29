import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcardComponent } from './smallcard.component';

describe('SmallcardComponent', () => {
  let component: SmallcardComponent;
  let fixture: ComponentFixture<SmallcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
