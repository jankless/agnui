import { Patterns, Types } from '@agnui/enums';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'input',
})
export class InputDirective {
  @HostBinding() @Input() type: Types | undefined = Types.Email;

  @Input() pattern: Patterns | undefined = Patterns.Email;
  @HostBinding('pattern')
  get _pattern(): RegExp | undefined {
    return this.pattern ? new RegExp(this.pattern) : undefined;
  }

  constructor() {
    console.log(Types);
    console.log(Types['Checkbox']);
    Object.entries(Types).forEach(([key, value]) => {
      console.log(key, value);
    });
  }
}
