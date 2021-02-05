import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { ClickService } from '../shared-services/handle-clicks.service';

@Directive({
  selector: '[appSelectAnswer]'
})
export class SelectAnswerDirective {
  @HostBinding('class.selected') isSelected = false;

  constructor(
    private elRef: ElementRef,
    private clickService: ClickService) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // prevents click if submit answer was clicked 
    if (this.clickService.nextBtnClickCount == 0) {
      this.isSelected = this.elRef.nativeElement.contains(event.target) ? !this.isSelected : false;
    }
  }
}
