import { ElementRef, Input, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'ycjs-core-image',
  template: ''
})

export class YcjsImageComponent implements OnChanges {
  @Input() src: string;
  @Input() ratio: number = 1;
  @Input() width: string = '100%';
  ready: boolean = true;
  constructor(private el: ElementRef) { }

  ngOnChanges(changed: any): void {
    this.el.nativeElement.style.width = this.width;
    let width: number = this.el.nativeElement.getBoundingClientRect().width;
    this.el.nativeElement.style.height = width * this.ratio + 'px';
    this.el.nativeElement.style.backgroundImage = `url('${this.src}')`;
    this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.el.nativeElement.style.backgroundSize = 'cover';
  }
}