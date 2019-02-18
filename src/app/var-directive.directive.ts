import { Directive, Input, ElementRef } from '@angular/core';
import { Avis } from './models';

@Directive({
  selector: '[varDir]'
})
export class VarDirectiveDirective {

  @Input() score: number;
  @Input() avis: Avis;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.avis == Avis.AIMER) {
      this.el.nativeElement.innerHTML = ` a reçu un Bonus, score : ${this.score}`;
    } else {
      this.el.nativeElement.innerHTML = ` a reçu un Malus, score : ${this.score}`;
    }
  }

}
