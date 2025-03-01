import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosScriptComponent } from './arquivos-script.component';

describe('ArquivosScriptComponent', () => {
  let component: ArquivosScriptComponent;
  let fixture: ComponentFixture<ArquivosScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquivosScriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivosScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
