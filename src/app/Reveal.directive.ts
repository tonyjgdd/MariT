import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({ selector: '[reveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  private io?: IntersectionObserver;
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const e = this.el.nativeElement;
    e.classList.add('reveal');
    this.io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        e.classList.add('in');
        this.io?.disconnect();
      }
    }, { threshold: 0.15 });
    this.io.observe(e);
  }

  ngOnDestroy() { this.io?.disconnect(); }
}