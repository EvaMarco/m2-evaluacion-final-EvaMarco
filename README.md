# Evaluación Final Módulo 2 Eva Marco

## Introducción

En esta evaluación nos han pedido que creemos un buscador de series. Este buscador debe constar de una barra de búsqueda con su botón, y un espacio para los resultados.
Además debemos crear una funcionalidad para guardar nuestra lista de series favoritas.

## Pasos iniciales

Lo primero es crear nuestro repositorio, crear los documentos que vamos a necesitar el HTML con sus etiquetas Meta enlazamos el JavaScript y comprobamos que tenemos linkeado el CSS.

Crear la estructura de HTML mínima necesaria para probar nuestra funcionalidad, en este caso, input de texto, botón de búsqueda y div para poder pintar los resultados.

Lo siguiente que tenemos que tener en cuenta es que con cada búsqueda que hagamos tenemos que hacer una petición a una api que nos han proporcionado. Para ello seguiremos estos pasos.

1. Ver como se estructura el JSON que recibimos de la api.
2. Mirar que información necesitamos sacar del objeto recibido.
3. Comprobar que obtenemos resultados iguales en las búsquedas.

Una vez ya tenemos acceso a la info que necesitamos podemos empezar a escribir nuestro código.

## Comenzamos con el código

Creamos las constantes necesarias para localizar los elementos del DOM y creamos los listener para los elementos que son interactuables. (el botón).

Creamos la función que realiza la búsqueda (fetch url, con sus then) e imprimimos los resultados por consola, para comprobar que todo funciona.

Cuando ya tenemos claro que necesitamos y como lo obtenemos creamos los elementos que se van a introducir en el DOM. Lo podemos hacer con innerHTML o con createElement.

Comprobamos con una búsqueda aleatoria que todo funciona.

Si funciona ya tenemos medio ejercicio hecho.

Ahora vamos con la sección de favoritos. Añadimos un listener a todos los divs creados, así cuando los pinchemos podemos ejecutar la función addFavoritos.
Esta función crea un objeto que contiene el data-id, el título y la imagen que hemos añadido en la creación del elemento. Lo mete en el local Storage. Y si volvemos a pinchar se elimina de este registro.

Además vamos a hacer que cuando carguemos la página se carguen en la lista de favoritos que tenemos guardados en el local Storage.

Vamos a darle un poco de estilos a nuestra aplicación.

Ahora tenemos que añadir la funcionalidad de que se puedan eliminar de favoritos con un click.

## Funcionalidades introducidas

Para este proyecto hemos usado las funcionalidades proporcionadas por el Adalab Started Kit que nos proporciona un compilador de SASS un linter de JS y alguna autoamtización de tareas con gulp.


![Adalab](_src/assets/images/logo-adalab-80px.png)
## Adalab web starter kit
Ahoy! Esta es nuestro Starter Kit en node/gulp para este primer contacto con el desarrollo web
Incluye SCSS, un sistema de plantillas HTMl y un web server.

## Guía de inicio rápido
Necesitarás instalar [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) para trabajar con este Starter Kit, luego:
1. Descarga o clona el repositorio
2. Instala las dependencias locales con `$ npm install`
3. Arranca el kit con `$ gulp`

## Espera, ¿esto se hace siempre?
> ### Solo una vez al principio en cada ordenador que utilicemos:
- Instalamos node
- Instalamos el comando de gulp de forma global para poder usarlo desde cualquier carpeta usando `npm install --global gulp-cli`

> ### Cada vez que descarguemos o clonemos un repo:
- `npm install` para instalar los paquetes necesarios para convertir Sass a CSS, minizarlo, etc.

> ### Cada vez que estemos trabajando con nuestro código:
- Desde nuestra terminal, ejecutamos el comando `gulp` para que realice la tarea por defecto, que en el caso del `gulpfile.js` que tenemos en adalab-web-starter-kit estará pendiente de nuestros archivos Sass, html y JavaScript y los compilará, minificará y/o recargará el servidor cada vez que hagamos un cambio

## Tareas de gulp incluidas
### Inicio de un web server para desarrollo
```
$ gulp
```
Lanza un webserver con BrowserSync y varios watchers estarán pendientes de los archivos SCSS/JS/HTML, en la carpeta **public/**, para recargar el navegador cuando se necesite.

### Versión lista para subir a producción
```
$ gulp docs
```
En la carpeta **docs/** genera los CSS y JS minimizados y sin sourcemaps listos para subir al repo y activar GitHub Pages en `master/docs`.


## Estructura del proyecto
Nuestro **gulpfile.js** usa un JSON de configuración con las rutas de los archivos a generar/vigilar.

La estructura de carpetas tiene esta pinta:
```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials

```

## HTML
Viene incluído el paquete [**gulp-html-partial**](https://www.npmjs.com/package/gulp-html-partial) que nos va a permitir tener un sistema de plantillas html

## Imágenes e iconos
Tenemos en **_src/** una carpeta para las imágenes del proyecto y una para los iconos como el favicon o los iconos de dispositivos móviles. Estos últimos se generan en la raíz de las carpetas **public/** y **docs/**

## CSS
Viene incluído el paquete [**gulp-combine-mq**](https://www.npmjs.com/package/gulp-combine-mq) que agrupa todas las mediaqueries al final del documento css.

## JS
Podemos usar parciales de JS: en el JSON de configuración, **config.json** especificamos los archivos JS que utilizamos y en el orden que deben procesarse.

## ¿Cómo actualizo si tengo una versión anterior?
En principio puedes descargar todos los archivos fuera de **_src/** y sustituir los de tu proyecto. Además deberías replicar la estructura de carpetas dentro de **_src/**.

## Falta algo?
Echas de menos que el kit haga algo en concreto? Pidelo sin problema a través de los Issues o si te animas a mejorarlo mándanos un PR :)
