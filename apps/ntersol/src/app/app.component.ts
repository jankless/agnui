import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { NtsRouteData } from './app.routing';

@Component({
  selector: 'agnui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private router: Router) {}

  route: Observable<NtsRouteData> = this.router.events.pipe(
    filter((data) => !!(data instanceof ActivationEnd)),
    map((data) => data as ActivationEnd),
    filter((data) => !!data?.snapshot?.data),
    map((data) => data?.snapshot?.data as NtsRouteData)
  );

  header: Observable<NtsRouteData['header']> = this.route.pipe(
    map((data) => data?.header)
  );
}
