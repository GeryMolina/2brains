### Prueba Tecnica 2Brains

Proyecto donde te puedes autentificar y ver un listado de colaboradores, más el detalle de cada uno.

#### Instalación 🚀

Una vez que descargas o forkeas el proyecto debes instalar las dependencias
```sh
$ cd Prueba-Tecnica
$ yarn
$ yarn start
```
La aplicación se abrirá en [http://localhost:3000](http://localhost:3000/)

#### Despliegue 📦

El proyecto está desplegado en firebase hosting [https://braintest-27531.web.app/](https://braintest-27531.web.app/).

Puedes acceder con los siguientes datos:
* Email: adm@gmail.com
* Password: 123456

También puedes registrarte para ingresar con tu propio correo y contraseña.     
Para volver a desplegar en la consola debes seguir los siguiente comandos:
```sh
$ yarn run build
```
y luego 
```sh
$ firebase deploy
```