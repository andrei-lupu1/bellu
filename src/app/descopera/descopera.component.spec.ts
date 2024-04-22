import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescoperaComponent } from './descopera.component';

describe('DescoperaComponent', () => {
  let component: DescoperaComponent;
  let fixture: ComponentFixture<DescoperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescoperaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescoperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
