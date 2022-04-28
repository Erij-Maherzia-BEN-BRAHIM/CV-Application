import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSurvolDir]'
})
export class SurvolDirDirective {
@HostBinding('style.backgroundColor') bg='white';
@HostBinding('style.color') cl='black';
  constructor() { }
@HostListener('mouseenter') mouseenter(){
  this.bg='red';
  this.cl='pink';
}
@HostListener('mouseleave')mouseleave(){
  this.bg='white';
  this.cl='black';
}
}
