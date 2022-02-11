import { FormControlStatus, Patterns, Types } from '@agnui/enums';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: '',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  type = Types.Email;
  form = this.fb.group({
    control: this.fb.control('', [
      Validators.pattern(new RegExp(Patterns.Email)),
    ]),
  });
  get control(): FormControl {
    return this.form.get('control') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.control.statusChanges.subscribe((status) => {
      if (status === FormControlStatus.Invalid) {
        console.log(status);
        console.log(this.control);
      }
    });
  }
}
