import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let element: HTMLElement;
  let header: HTMLElement;
  let main: HTMLElement;
  let footer: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    header = element.querySelector('header') as HTMLElement;
    main = element.querySelector('main') as HTMLElement;
    footer = element.querySelector('footer') as HTMLElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    expect(header).toBeInstanceOf(HTMLElement);
  });
  it('should render main', () => {
    expect(main).toBeInstanceOf(HTMLElement);
  });
  it('should render footer', () => {
    expect(footer).toBeInstanceOf(HTMLElement);
  });

  it('should render layout', () => {
    expect(header?.previousElementSibling).toBeFalsy();
    expect(header?.nextElementSibling).toEqual(main);
    expect(main?.nextElementSibling).toEqual(footer);
    expect(footer?.nextElementSibling).toBeFalsy();
  });
});
