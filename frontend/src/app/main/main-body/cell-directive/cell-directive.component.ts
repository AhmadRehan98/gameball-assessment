import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cellHost]'
})
export class CellDirectiveComponent {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
