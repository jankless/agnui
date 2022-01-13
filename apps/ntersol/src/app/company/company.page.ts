import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
