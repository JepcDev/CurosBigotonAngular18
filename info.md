https://youtu.be/R1QePsia5xk?feature=shared&t=9991
difenete elementos que podemos encontrar en angular

Angular => es un tipo de plataforma => Ya que es un conjunto de frameworks, tiene angular universal, express, TypeScript, es un ecosistema.
Es una plataforma estructural => Por que la forma en la que se trabaja en angular es brindar funcionalidad a algo que no lo tenia y esto se hace por medio de las directivas,
ejemplos => Puede hacer que un DOM pueda desaparecer depediendo de la condicion.

!= frameworkers => Software developers, Software Engineers => Somos el depende, Lo que elijamos siempre depende de 3 factores
Nos va a ayudar a elegir cual va ser la tecnologia
1. Recursos => recursos que tengamos para hacer el proyecto
2. Limitaciones =>
3. Requisitos =>

##Vamos a poder aplicar en angular "Components" => La unidad logica MINIMA => Esto es por que cuando utilizamos, usamos un componente lo que tenemos que hacer siempre es tratar de manejar(usar o hacer) una cosa por vez
  Login
    - Mi forma => Renderizar la ista de personajes, y para renderizar la lista personajes otro componente mas
      - Lista de personajes => hay un componente que se encarga de mostrar la lista de personajes, y este componente tiene otro componente dentro
      - El personaje, Los detalles del personaje,
        ademas tenemos un formulario para editar el personaje y va a estar al mismo nivel del personaje
        Por que con el personaje vamos a pooder "borrarlo", "Editarlo"
        - borrarlo
        - editarlo
          - validar si los datos son correctas
          - submit

  El formulario debe estar aparte ya que editarlo tiene muchas coas
  - Renderizar la lista de personakes
    - Lista de personajes
    - El personaje
      - borrarlo
      - editarlo
        - Validadr si los datos son correcto
        - Ver que se haga bien el "submit"

    - Formulario, va a pegarle a un servicio, validar el formulario, renderizar una lista de personajes X

Hay 2 tipos de componentes,
Componente TONTO, Dum Componente, pensalo con las palabras
quiero qe lo piensen en  :
Patron contenedor / presentacional
- Presentacional y
- Container
y se lo explica asi por que esto es
es el patron contenedor / presentacional patron de desarrollo

Pensar las cosas de forma organica -> las cosas tienen que verse, entenderse sin tener que decirlas
Vamos a ver en este curso:
- Patron  contenedor presentacional
- y  a sumarle Scream architecture,
- Clean architecture
- Single Source of Truth Arquitecure

- Patron Presentational: Es usado para mostrar datos y manejar la UI , muestro las cosas
- Container: Maneja la logica de negocios y tambien la comunicacion con entiedades externas,

<!-- Es un contenedor => Se encarga de conectarse a una entidad externa traer informacion y pasarla   -->
<!-- un componente utiliza un decorador para decir cual es la funcionalidad extra que se le esta metiendo a ese algo  -->
<!-- Si agregamos un decorador le estamos diciendo a angular que es un componente, el decorador esta dando informacion extra a la clase para decir a angular
    * para hacerle entender a angular para si alguien llega a usar app-user en html le decimos a angular que carge el componente de aqui abajo
    * y angular sabe eso por que tiene un decorador @Component
-->

<!--trabajaba con modulos Modulos
con un decorador
  @NgModule
  Era una caja que contiene  TODO y solamente TODO lo que se necesita para una funcionalidad, si tenia un componente @Component lo teniamos que agrear a esa caja, igual si era un servicio, un pipe
  Por que la funcionalidad login lo utilizaba, que utiliza formularios
  Si el hijo del hijo de un componente lo utilizaba y nadie mas igual habia que meterlo a la caja
  Ahora cada componente es su propio modulo, cada componente es como un mini-modulo
 -->

 <!-- DEV:COMMENT -> @Component Contenedor, componente padre-->
 <!-- Es un contenedor => Se encarga de conectarse a una entidad externa traer informacion y pasarla   -->
@Component({
  standalone: true,
  <!-- //selector: 'app-userContainer', -->
  selector: 'app-user',
  <!-- otros frameworkers, bibliotecas utilizan tsx , jsx para utilizar codigo dentro del html -->
  <!-- Es que html utiliza, angular tiene un atributo "template" dentro del decorador que nos va decir hey renderiza esto de una forma U otra  -->
  <!-- utilizamos "template" cuando solo hago una linea -->
  template: `<app-user-container [userName] = "userNameSignal()"/>`
  <!-- Tambien podriamos utilzar templateUrl   a diferencia de "template" utiliza una ruta, y esta ruta que estamos utilizando es la "ruta" para el template ya que es muy largo y se lo mete en un archivo extra -->
  <!-- Lo que decimos aqui es que en vez del -- "`<app-user-container [userName] = "userNameSignal()"/>`"-- que esta qui dentro como es muy largo lo metemos en un archivo extra-->
  <!-- Utilizamos templateUrl cuando el tmeplate es mas de una linea -->
  templateUrl: "./app-user-container.component.html"
  <!-- Lo mismo se hace con los style que por lo general son largos -->
  style:""
  styleUrl:"./ruta-style.css"
  //UserProfileComponent es el presentador, al cual le estamos pasando cual es el nombre del usuario [userName]
  <!-- se utiliza cuando hay formularios, y estos son los modulos, pero antes se lo tenia que meter a la caja de @NgModule, y asi metemos que esta funcionalidad se va a utilizar en este componente -->
  <!-- Los imports es algo propio de los componentes, ahora el componete va importar todo lo que el necesita para funcionar -->
  <!-- esto llama a UserProfileComponent  ReactiveFormsModule y si este componente renderiza o no al hijo(UserProfileComponent) ahy recien se llama a los imports de los hijos-->
  imports: [UserProfileComponent, ReactiveFormsModule]
})
<!-- //export class UserContainerComponent{ -->
export class UserComponent{
  //utiliza un servicio y un servicio es un entidad externa por lo tanto es un contenedor
  userService = inject(UserService)
  userNameSignal = this.userService.userNameSignal;
}

<!-- DEV:COMMENT -> @Component Presentador, componente hijo-->
<!-- Es un Presentador => No hace nada, solo agarra un dato y lo muestra  -->
<!-- <app-user-profile></app-user-profile> en html  le decimos a angular carga el componente de aqui abajo-->
@Component({
  <!-- y para que todo eso suceda hay que poner que es standalone, significa que funciona por si mismo no necesita un modulo, va a traer lo que necesite para funcionar -->
  standalone:true,
  selector: 'app-user-profile',
  <!-- template: `<div>{{ userName }}}</div>` -->
  template: `<div [style]="{ color: red }" >{{ userName }}}</div>`,
  <!-- y si el componente padre renderiza al componente hijo ahi recien se va llamar estos -->
  <!-- Como este utiliza UserProfileComponent entonces si se agrega y solamente cuando el hijo(este componente) se carge esto se carga en memoria -->
  imports: [ReactiveFormsModule]
})
export class UserProfileComponent {
  userName: string = "Gentleman"
}
<!-- DEV:COMMENT -> @Component -->componente INTELIGENTE

<!-- DEV:COMMENT -> Directivas -->
<!-- Son las cuales dan el toque de plataforma estructural a angular, brindan funcionalidad extra a algo que antes no la tenia, que es ese algo? es un elemento del DOM -->

<!--DEV:COMMENT -> Directiva estructural -->
<!-- Es aquella estructura que modifica la estructura del elemento al cual se aplica -->
<!-- https://youtu.be/R1QePsia5xk?si=p2ACyvHA2oUck6_a&t=11977 -->
<!-- Angular tenia
    * Un div no tiene la capacidad para agregar una clase o no dependiendo de la condicion
    - ngClass para poner una clase o no de angular,
    - ngStyle para poner o no un estilo ,
    - ngIf para renderizar algo o no,
    * Un elemento del div no tiene la capacidad  de renderizarse o no dependiendo de la condicion
    - ngFor para ciclar un arreglo y por cada elemento del arreglo renderizar o no algo
-->
<!-- <div *ngIf =""></div> * directiva estrucutral, es la directiva que modifica la estructura del elemente al cual se aplica -->
<!--
  - [style]"={ color: red }" => atributo de entrada al componente, cuando ponemos algo entre corchetes le estamos diciendo a angular que es codigo que tenes que saber, es un objeto.
  - `style="{ color: red }" >` y si solo lo ponemos asi seria un string
  - <div *ngIf =""></div> renderizate si algo ocurre o no, * directiva estructural, es la directiva que modifica la estructura del elemento al cual se aplica, estamos renderizando o no algo
  - <div *ngIf =""></div> renderiza x veces algo dependiendo la cantidad de elementos que esto tenga dentro, * se modifica algo
 -->

<!-- DEV:COMMENT -> Directivas de atributos
  - Son todas aquellas que son atributos sobre el elemento
  <div [style]=""> agregar un style o no dependiendo de algo
  <div [ngClass] = ""></div> agrega una clase o no dependiendo una condicion - esto ya no se usara
  <div [ngClass] = "{'active':isActive}"></div> mete la clase "active" siempre y cuando la variable isActive sea true
-->

<!-- DEV:COMMENT -> Directiva Ejemplos -->
<!-- Es estructural => mostrarse algo se renderiza o no en la pantalla, cambia la estructura total del DOM -->
<!-- si se ve que una directiva esta modificando el DOM eso quiere desir que es estructural -->
  @Directive({
    standalone: true, //cada directiva va a traer lo que necesite para funcionar
    <!-- '[appShowOnScreenSize]' es solo una directiva, una forma de mostrar al selector que es una directiva -->
    <!-- cuando le ponemos los corchetes [] significa que es una "directiva" y cuando solo le ponemos el selector "app-user" es un Componente -->
    selector: '[appShowOnScreenSize]' //quiero mostrar algo dependiendo la resolucion    //como podemos utilizar la directiva
  })
  export class appShowOnScreenSizeDirective implements OnInit{
    @Input() appShowOnScreenSize: 'small' | 'medium' | 'large';

    constructor(){
      <!-- templateRef => una referencia al template a lo que esta renderizado-->
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
    }{}
    <!-- cuando esto se carge viene el tema del ngOnInit, son hooks= diferentes ciclos de vida que tiene un componente, son muchos
      - Un componente, una directiva, un servicio, puede utilizar este tipo de cosas implements OnInit(clase abstracta) que adentro tiene un metodo que ngOnInit pide ser sobreescrito
    -->
    ngOnInit(){
      this.updateView();
      <!-- Cada vez que se inici este componenete la primera vez vas a llamar a actualizar la vista
          pero tambien cada vez que se haga un "resizing"  achique o agrande la pantalla, tambien la vas a llamar y esto se realiza por que se le pide una medida y si se cambia la medida por que se hace resizing hay que volverlo a ejecutar
      -->
      window.addEventListener('resize', this.updateView.bind(this)) //vamos a buscar cuando se haga resizing de la pantalla
    }
    <!-- vamos a crear este metodo como privado por que solo lo quiero usar de forma interna -->
    private updateView(){
      <!-- vamos a sacar el ancho de la pantalla -->
      const width = windows.innerWidth;
      <!-- dependiendo de ese tamaño borro todo lo que tengo en la vista y voy a recrear bien -->
      this.viewContainer.clear();
      if(this.shouldShowContent(width)){
        <!--estamos diciendo si esto se puede renderizar o no lo agrego en el template-->
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
    private shouldShowContent(width: number):boolean{
      <!-- si appShowOnScreenSizeDirective  es igal a small el tamaño "width" es menor a 600 retornamos true-->
      if(this.appShowOnScreenSizeDirective == 'small' && width < 600){
        return true;
      }
      if(this.appShowOnScreenSizeDirective == 'medium' && width >= 600 && width <=1024){
        return true;
      }
      if(this.appShowOnScreenSizeDirective == 'large' && width >=1024){
        return true;
      }
      return false;
    }
  }
-->
<!-- se utiliza asi
    <div *appShowOnScreenSize = "'small'">Contenido parara pantallas pequeñas</div>
 -->

<!-- DEV:COMMENT -> Directiva de atributo -->
<!-- siver para crear funcionalidades extras y para agregarlo en lugares en los que nosotros lo necesitemos, repetidas veces 
    Tambien sirve para la reusabilidad
-->
<!--
@Directive({
  standalone:true,
  <!-- hacer un Highlight sobre algo -->
  selector:"[appHighlight]"
<!-- }) -->
export class HighLightDirective {
  <!-- voy a pararme sobre el elemento sobre el cual estoy aplicando la directiva, ya qu es un atributo de una directiva pero de un elemento y aqi se accede a ese elemento "private el: ElemenRef"
  - renderer es la forma correcta de renderizar algo cosas a mano en angular d la forma correcta
  - Sin renderen tratan de injectar cosas con html, el problema hay que hacer demasiadas cosas
  -->
  constructor(private el: ElemenRef, private renderer: Renderer2){ }

  <!-- decorador de metodos, y va a llamarse y escuchar cuando entre el mouse en un elmento -->
  <!-- aqui agrego un stilo -->
  @HostListener("mouseenter") onMouseEnter(){
    <!-- agarramos el elemento nativo nos paramos sosbre su elemento nativo ejemplo: booton y cambiamos el style -->
    <!-- ahora cuando nos paremos sobre un elemento con el mouse, automaticamente    se va  aponer el background de amarrillo -->
    this.renderer.setStyle(this.el.nativeElement, "background-color", "yellow");
  }

<!-- Pdemos hacer un spam si tenemos un elmento span le podemos poner un upperCase podemos hacer que si se le agregas esa directiva a ese elemento spam sutomaticamente es uppercase-->
<!-- Aqui le saco el estilo -->
  @HostListener("mouseleave") onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement, "background-color");
  }
}

<!-- <p appHighlight>Pasa el mouse sobre este texto para resaltar su contenido</p> -->
-->


------------ Git
Aquí tienes algunos ejemplos de commits con el tipo build, que generalmente se usan para cambios relacionados con la configuración del proyecto, la construcción del código o la gestión de dependencias:

Actualizar configuración de Webpack para producción

arduino
Copiar
build: update Webpack config for production build
Agregar script de build para integración continua

csharp
Copiar
build: add CI build script for deployment pipeline
Actualizar dependencias de Node.js a la última versión

pgsql
Copiar
build: update Node.js dependencies to latest version
Cambiar la configuración de Babel para optimización

bash
Copiar
build: optimize Babel configuration for faster build times
Añadir soporte para TypeScript en el proceso de construcción

vbnet
Copiar
build: add TypeScript support to build process
Actualizar versión de Webpack para mejorar el rendimiento

vbnet
Copiar
build: upgrade Webpack to v5 for better performance
Modificar configuración de ESLint para integración en el build

vbnet
Copiar
build: modify ESLint config to integrate with build process
Ajustar configuración de caching en el proceso de build

makefile
Copiar
build: tweak caching settings in build pipeline for faster rebuilds
Eliminar archivos innecesarios del proceso de construcción

csharp
Copiar
build: remove unnecessary files from build output
Configurar tarea de build para minificar archivos JS

vbnet
Copiar
build: configure build task to minify JavaScript files
El tipo build generalmente indica que el commit se refiere a un cambio en la infraestructura de construcción del proyecto, como optimización, configuración de herramientas o actualización de dependencias.