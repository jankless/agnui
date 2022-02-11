import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'agnui-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
