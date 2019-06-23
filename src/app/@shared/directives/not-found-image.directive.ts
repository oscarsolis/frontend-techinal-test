// core
import {
  Input,
  Directive
} from '@angular/core';

@Directive({
  selector: 'img[imageNotFound]',
  host: {
    '[src]': 'checkPath(src)',
    '(error)': 'onError($event)'
  }
})
export class NotFoundImageDirective {

  //
  @Input() src: string;

  //
  defaultImg: string = 'assets/img/not_found.png';

  /**
   *
   */
  onError(event) {
    return event.target.src = this.defaultImg;
  }

  /**
   *
   */
  checkPath(src: any) {
    return src ? src : this.defaultImg;
  }
}
