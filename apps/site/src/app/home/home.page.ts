import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './home.page.html',
  styles: [
    `
      :host {
        display: block;
      }

      .stores {
        text-align: center;
      }

      .stores img {
        margin: 0.5ch;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
