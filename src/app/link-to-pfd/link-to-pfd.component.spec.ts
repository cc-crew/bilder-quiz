import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToPfdComponent } from './link-to-pfd.component';

describe('LinkToPfdComponent', () => {
  let component: LinkToPfdComponent;
  let fixture: ComponentFixture<LinkToPfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkToPfdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkToPfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
