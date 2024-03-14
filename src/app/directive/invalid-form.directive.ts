import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormControlDirective, FormGroupDirective } from '@angular/forms';
import { debounceTime, fromEvent, take } from 'rxjs';


@Directive({
  selector: '[appInvalidForm]'
})
export class InvalidFormDirective {

  constructor(private el:ElementRef, private formGroupDir: FormGroupDirective) {}

  @HostListener('ngSubmit') onSubmit() {
    if (this.formGroupDir.control.invalid) {
      this.submitFormToTopInvalid()
    }
  }

  getToOffControl(controlEl: HTMLElement) {
    const lebelOffSet = 50;
    return controlEl.getBoundingClientRect().top + window.screenY - lebelOffSet;
  }

  submitFormToTopInvalid() {
    const firstFormInvalid = this.el.nativeElement.querySelector( ".ng-invalid" )

    window.scroll({
      top: this.getToOffControl(firstFormInvalid),
      left:0,
      behavior: 'smooth',
    })

    fromEvent(window, 'scroll').pipe(debounceTime(500), take(1)).subscribe(() => firstFormInvalid.focus());
  }


}
