import { Controller } from 'stimulus';
import Swal from 'sweetalert2';
import axios from 'axios';

export default class extends Controller {
  static values = {
    url: String,
  };

  onSubmit(event) {
    event.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary ms-2',
        cancelButton: 'btn btn-danger ms-2',
      },
      buttonsStyling: false,
    });

    this.obra = document.getElementById('js-obra-select').value;
    this.fecha = document.getElementById('js-fecha').value;

    if (this.obra == '') {
      swalWithBootstrapButtons.fire({
        title: 'Error',
        text: 'Debe seleccionar una obra',
        icon: 'error',
        confirmButtonColor: 'primary',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    if (this.fecha == '') {
      swalWithBootstrapButtons.fire({
        title: 'Error',
        text: 'Debe seleccionar una fecha',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }
    const date = new Date();
    const submitDate = new Date(this.fecha);

    if (submitDate > date) {
      swalWithBootstrapButtons.fire({
        title: 'Error',
        text: 'La fecha seleccionada no puede ser mayor a la fecha actual',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    swalWithBootstrapButtons.fire({
      title: 'Cierre Mes',
      text: 'Esta por cerrar el mes, presione aceptar para continuar',
      icon: 'warning',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        this.ejecutar();
      },
    });
  }

  async ejecutar() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary ms-2',
        cancelButton: 'btn btn-danger ms-2',
      },
      buttonsStyling: false,
    });

    const response = await fetch(
      this.urlValue + '/' + this.obra + '/' + this.fecha
    );

    console.log(response.status);

    if (response.status != 200) {
      swalWithBootstrapButtons.fire({
        title: 'Error',
        text: 'El cierre para la fecha: ' + this.fecha + ' ya fue realizado',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    } else {
      swalWithBootstrapButtons.fire({
        title: 'Exito',
        text:
          'El cierre para la fecha: ' +
          this.fecha +
          ' fue realizado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    }
  }
}
