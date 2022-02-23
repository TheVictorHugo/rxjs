import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHeroEditorComponent } from './the-hero-editor.component';

describe('TheHeroEditorComponent', () => {
  let component: TheHeroEditorComponent;
  let fixture: ComponentFixture<TheHeroEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheHeroEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheHeroEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
