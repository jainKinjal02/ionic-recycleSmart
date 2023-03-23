import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;

  let router: Router; // declared a variable

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router); // creates an instance of the service or component
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to login page after load', fakeAsync(() => {
    spyOn(router,'navigate');
    component.ngOnInit();  // added test sch that it should navigate to login page , hence calling ngOnit to redirect to login page.
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
