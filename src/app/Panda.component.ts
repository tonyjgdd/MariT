import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panda',
  standalone: true,
  template: `
    <img
      [src]="'/photos/logo_sf.png'"
      [style.width.px]="size"
      [style.height.px]="size"
      alt="Panda"
    />
  `,
  styles: [`
    :host {
      display: inline-block;
      line-height: 0;
    }

    img {
      display: block;
      object-fit: contain;
    }
  `],
})
export class PandaComponent {
  @Input() size = 64;
}