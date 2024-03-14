import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormControlDirective, FormGroupDirective } from '@angular/forms';
import { debounceTime, fromEvent, take } from 'rxjs';

@Directive({
  selector: '[appInvalidFormControl]'
})
export class InvalidFormControlDirective {

  constructor(private el: ElementRef, private formControlDri: FormGroupDirective) { }

  @HostListener('ngSubmit') onSubmit() {
    if (this.formControlDri.control.invalid) {
      this.submitToTopControl()
    }
  }

  getTopToOffControl (controlEl: HTMLElement) {
    const lebelOffSet = 50;
    return controlEl.getBoundingClientRect().top + window.scrollY - lebelOffSet;
  }

  submitToTopControl () {
    const firstFormInvalid = this.el.nativeElement.queryselector('.ng-invalid');

    window.scroll({
      top: this.getTopToOffControl(firstFormInvalid),
      left: 0,
      behavior: 'smooth'
    })

    fromEvent(window, 'scroll').pipe(debounceTime(500), take(1)).subscribe(() => firstFormInvalid.focus());
  }
}
