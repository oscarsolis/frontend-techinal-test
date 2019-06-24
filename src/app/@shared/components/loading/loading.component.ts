// core
import {
  Input,
  Output,
  Component,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
		<div class="loading-wrapper" *ngIf="showComponent">
      <div class="sk-cube-grid" *ngIf="!showError">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
			<div class="error" *ngIf="showError">
					<i class="fa fa-frown-o fa-5x"></i>
			</div>
      <p class="text-message">{{ message }}</p>
      <button class="btn btn-primary" *ngIf="showRetryButton" (click)="_retry()">
          Intentar nuevamente
      </button>
		</div>
	`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  //
  @Input() showComponent = true;

  //
  showError = false;

  //
  showRetryButton = false;

  //
  @Input('message')
  message: string = 'Cargando información, por favor espere...';

  //
  @Output()
  retry: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  /**
   *
   */
  showMessageError(
    message: string = 'Algo Salio mal!',
    showRetryButton: boolean = false
  ): void {
    this.showComponent = true;
    this.showError = true;
    this.message = message;
    this.showRetryButton = showRetryButton;
  }

  /**
   *
   */
  show(): void {
    this.showComponent = true;
    this.showError = false;
    this.showRetryButton = false;
    this.message = 'Cargando información, por favor espere...';
  }

  /**
   *
   */
  hide(): void {
    this.showComponent = false;
  }

  /**
   *
   */
  _retry(): void {
    this.retry.next();
  }

  /**
   *
   */
  isVisible(): boolean {
    return this.showComponent;
  }
}
