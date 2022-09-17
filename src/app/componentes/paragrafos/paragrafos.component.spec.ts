import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagrafosComponent } from './paragrafos.component';

describe('ParagrafosComponent', () => {
  let component: ParagrafosComponent;
  let fixture: ComponentFixture<ParagrafosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagrafosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagrafosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
