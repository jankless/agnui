import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'agnui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() bgSrc: string | undefined;
  @Input() logoSrc: string | undefined;
  @Input() logoAlt: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;

  @HostBinding('style.background-image') bgImage!: SafeStyle;

  setBackground(src: string) {
    this.bgImage = this.sanitizer.bypassSecurityTrustStyle(`url(${src})`);
  }

  ngOnInit() {
    if (this.bgSrc) {
      this.setBackground(this.bgSrc);
    }
  }

  ngOnChanges() {
    if (this.bgSrc) {
      this.setBackground(this.bgSrc);
    }
  }
}
