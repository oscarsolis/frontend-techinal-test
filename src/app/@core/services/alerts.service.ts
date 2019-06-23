
// core
import { Injectable } from '@angular/core';

// sweetAlert
import swal, {
  SweetAlertType,
  SweetAlertOptions
} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  /**
   *
   */
  private defaultOptionsSwal: SweetAlertOptions = {
    width: '350px',
    padding: 10,
    showCancelButton: true,
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-danger',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar',
    buttonsStyling: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    customClass: 'swal-blako'
  };

  constructor() { }

  /**
  * Muestra un modal de confirmación a una acción
  */
  swalConfirm(text: string): Promise<any> {
    let options: SweetAlertOptions = {
      title: 'Alerta',
      text: text,
      type: 'warning',
    };
    options = Object.assign(options, this.defaultOptionsSwal);
    return swal.fire(options);
  }



  /**
	 * Muestra un modal de información básica
	 */
  swalBasic(
    text: string,
    typeSwal: SweetAlertType
  ): void {
    let title = '';
    switch (typeSwal) {
      case 'success':
        title = 'Bien hecho';
        break;
      case 'error':
        title = 'Lo sentimos :('
        break;
      case 'warning':
        title = '¡Advertencia!'
        break;
    }
    let options: SweetAlertOptions = {
      title: title,
      text: text,
      type: typeSwal,
      padding: 0
    };
    options = Object.assign(options, this.defaultOptionsSwal);
    options.showCancelButton = false;
    swal.fire(options);
  }

}
