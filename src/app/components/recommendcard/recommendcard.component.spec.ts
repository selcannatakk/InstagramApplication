import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendcardComponent } from './recommendcard.component';

describe('RecommendcardComponent', () => {
  let component: RecommendcardComponent;
  let fixture: ComponentFixture<RecommendcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
