# Frontend Developer Challenge

## Problema

Tiendas “El Baratón” necesita un e-commerce para expandir sus servicios, para eso don Pepe (propietario de la tienda) ha provisto de los siguientes requerimientos:
 * La tienda debe mostrar categorías las cuales están conformadas por subniveles, éstos subniveles a su vez pueden tener más subniveles anidados, se debe hacer un menú donde aparezcan categorías y subniveles de forma anidada. Ejemplo:
 
      * Categoría licores
   * subnivel vinos
        * subnivel vinos tintos
        * subnivel vinos blancos  
        
* Los productos tienen un identificador principal y un identificador de subnivel, esto quiere decir que un producto sólo debe ser mostrado en su subnivel correspondiente.
* Los productos deben filtrarse por: disponibilidad, rango de precios, cantidad en stock.
* Los productos deben poder ordenarse por precio, disponibilidad y cantidad.
* Se debe crear un carrito de compras donde los usuarios puedan agregar, editar cantidad y eliminar un producto.
* Los productos deben permanecer en el carrito si el usuario cierra y abre la página, solo deben ser borrados si el usuario realiza la compra.
* Un subnivel final es aquel que no tiene más subniveles, en éste caso debe aparecer una caja de texto que permita realizar búsquedas de productos por nombre en dichos subniveles.
* Además, el ecommerce debe ser responsive.

## Tabla De Contenidos
- [Descripción](#descripción)
- [Requerimientos](#requerimientos)
- [Instalación](#instalación)
- [Dependencias](#dependencias)
- [Autor](#autor)

## Descripción
Para la construcción de la prueba se uso como tecnológica angular en su versión 6.1.10, de igual manera se hizo uso de la herramienta angular cli en su versión 6.2.9 el cual nos permite gestionar y empaquetar nuestra aplicación web para subirla a un entorno de producción.

## Requerimientos
- Angular CLI 6.2.9
- NodeJs >= 8
- NPM

## Instalación
Ejecute los siguientes comandos en su terminal
```
  npm install
  ng serve -o
```

## Dependencias

- [Angular Progressbar](https://github.com/MurhafSousli/ngx-progressbar)
- [Font Awesome](https://fontawesome.com/v4.7.0/)
- [SweetAlert](https://sweetalert2.github.io)
- [Bootstrap](https://getbootstrap.com/)
- [NgMask](https://github.com/JsDaddy/ngx-mask#readme)

## Autor

* **Oscar Solis Guzman (solisguzmanoscar@gmail.com)**
