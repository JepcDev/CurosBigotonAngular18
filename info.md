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
```typeScript
@Directive({
  standalone:true,
  <!-- hacer un Highlight sobre algo -->
  selector:"[appHighlight]"
})
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

<!--
No le estoy pasando nada y tampoco estoy cambiando el DOM
<p appHighlight>Pasa el mouse sobre este texto para resaltar su contenido</p> -->
```

<!-- DEV:COMMENT -> Services -->
## Services
- Se utilizar para la logica de negocios// segun es segun el tipo se logica y muchas cosan, architecture
  // Podrias hacer la logica de negocio afuera en un archivo externo no precisamente necesario qie este en un servicio, pero eso dependera de lo que querramos hacer nosotros
- Se usa para conectarse con entidades(servicios, servidores) externas
- Se usa paran compartir informacion

- Por que se piensa que un servicio es mejor que un componente para compartir informacion?
  - por que es "singlenton", por que hay una unica instancia del servicio
    - Esa instancia se comparte a traves de la app,
      - Si hay una informacion dentro la info que este contiene se comparte a traves de toda la app
  - Un "COMPONENTE" tiene un ciclo de vida (engiandDestroy) es decir se destruye, y un "SERVICIO" que es un sigleton y es una unica instancia y es una unica instancia si se provee en toda la aplicacion.

- Componente => Esta muy ligado a la URL, "cuando esta URL exista carga este componente" y si cambiamos una URL por otra el componente deja de existir y se borra la informacion del componente
- Si se quiere guardar controlar un darkMode y la configuracion y que eliguio el usuario y demas Esta muy bien un servicio ya que es algo que esta en toda la aplicacion
- (si se provee en el root de nuestra aplicacion )un servicio es injectable, se puede agregar en diferentes lugares cuando lo necesitemos
- Y eso hace que este SINGLETON dependiendo del lugar donde se implemente es o no una unica instancia.

<!-- DEV:COMMENT -> Servicio => ProvidedIn : 'root' => unica instancia para TODA la app -->
- Esto es un servicio es una logica que podemos reutilizar en cualquier lugar
```typeScript
@injectable({
  providedIn: 'root', // se aplica en toda la app, es para todo la aplicacion
})
// El authService al ser SINGLETON. cualquier entidad que cree el authService, angular pregunta(ya existe el authService?), ya que esto deveria estar en el root de la aplicacion, y la respuesta es si entonce se usa directamente la instancia que ya existe
// No puede ser sttico pr que depende de un valor interno de la clase
changeAuthentication(){
  this.isAuthenticated = true;
}
// no se crea una nueva instancia, enotnces pregunta angular, esta authenticated? y si esta, lo guarda, entonces todos ya tienen este valor ya guardado
export class  AuthService{
  // S desde otro lugat oregunta  esta authenticated, te va a responder que si por que ya cambiaron el valor  y es la misma instancia
  // login(){
  // Cuando se pone estatic a un metodo quiere decir que no vas a utilizar nada de esa clase, no es necesario crear una instancia de la clase, se puede invocar a la clase y directamente al metodo AuthService.logi()
  // este login si puede ser statico por que no depende de nadie
  static login(){
    console.log('Usuario no authenticated')
    // podemos hacer una llamada http a algun lugar
  }
}
// La direferencia entre estos 2 casos es que al de arriba hay que instanciarla
// Sin static
const authService = new AuthService();
authService.login();
// Con static
// Se puede utilizar de esta manera sin crear la instancia de authService
AuthService.login();

// archivo cualqiera comparacion
export const login= ()=>{
    console.log('Usuario no authenticated')
    // podemos hacer una llamada http a algun lugar
  }

```
<!-- DEV:COMMENT -> Servicio => ProvidedIn : 'any' => En cualquier lugar se puede crear una instancia -->
<!-- Se va a injectar en el módulo más cercano que lo solicite por primera vez
  - si tubiera un componente con 3 componentes hijos y alguno de ellos lo llama y si alguien ya lo llamo mas arriba va a utilizar ese en vez del ultimo que lo llamo, va ser el mas cercano al cual se utilize,,, es optimo para quieremos optimizar la carga de los servicios cuando es un servicio muy pesado y demas
  Carga esti siemore y cuando se utilize en un lugar proximo
-->

```typeScript
@Injectable({
  providedIn: 'any'
})
// Se va a utilizar cuando el serivicio se instancie de forma mas eficiente directamente y no se necesita un singleton para toda la aplicacion
export class LogginService{
  log(message: string){
    console.log('log':, message);
  }
}

//Por componente => va de la mano con Por componente, significa que es dar un servicio pero que directamente se va a utilizar en un componente especifico, y donde? se va a utilizar en ese y en sus hijos
// Esto lo voy a utilizar cuando quiero que el servicio este disponible solo para este componente y sus hijos, creando un instancia unica y asilada el resto
// Se puede hacer la logica de negocio y comunicacion externas puede hacer apartado de todo y se carga unicamente cuando se carge este componente que lo utiliza
@Component({
  selector: 'app-local',
  template: `<p>Contenido del componente local</p>`,
  // le decimos que utilice LocalService
  providers : [LocalService]
})
export class LocalComponent {
  // Aqi ya tenemos al servicio utilizandose
  localService = inject(LocalService)
}

// Temas de poder intercambiar el uso de los providers
// vamoos a crear un proveedor para esos Injectables, eso quiere decir que vamos a poder dependeiendo de quien lo llame, como lo llame, donde se llame cambiar la utilizacion de la misma
@Injectable()
// E un servicio que da data falsa
// En vez de injectar esto --con
export class MoskDataService {
  getData(){
    return 'mock data';
  }
}
// injectamos esta clase --con
@Injectable()
export class RealDataService{
  getData(){
    return 'real data';
  }
}

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<p>{{ data }}</p>`,
  // y es asi como se puede puede agregar los proveedores
  // un componente es un miniModulo
  providers:[
  // te voy a proveer MockFataService, pero utilizando RealDataService
  // cuando quieras usar MockDataService en vez de instanciar un MockDataService vas a instanciar RealDataService, cambia uno por otro
  // esto es usando useClas, pero que pasa si quiero utilizar un valor especifico
  {provide: MockFataService, useClas: RealDataService}
]
})
// No se usa mas el contructor en angualç 18, todo es inject, nisiquiera tengo que esperar que esto se "Construya" esto se injecta y directo se puede aplicar la data
export class AppComponent{
  dataService = inject(MockDataService)
  data = this.dataService.getData();
}


// Cuando se trabaja por modulos
@NgModule([
  // podemos darle proveedores a los cuales se le puede cambiar su utilizacion
  // todo esto si se aplica en un NgModulo asi se lo puede aplicar tambien asi en los "Components"
providers:[
  // te voy a proveer MockFataService, pero utilizando RealDataService
  {provide: MockFataService, useClas: RealDataService}
]
])

// DEV:COMMENT -> useValue
// Esto anterior se puede hacer de vuelta pero para un valor especifico, si tengo un valor especifico
// useValue
const CONFIG = {  apiUrl:'https://api.example.com'} //reemplazo este --o
@Component({
  standalone: true,
  selector: 'app-config',
  template: `<p>API URL: {{ config.apiUrl }}</p>`,
  providers: [
    // Cuando querras utilizar CONFIG utiliza el valor de apiUrl
    // por este CONFIG --O
    {provide: ' CONFIG', useValue: {apiUrl:'https://api.rickandmorty.com' }}
  ]
})
export class ConfigComponent {
  constructor(@Inject('CONFIG') public config:{apiUrl:string}){}
}

// DEV:COMMENT -> useFactory

@Injectable()
export class DataService{
  apiUrl: string = '';
}

// Factory - fabrica, dependiendo del valor de algo creamos un elemento con un valor u otro
// export function dataServiceFactory(){
export function dataServiceFactory(hostname: string){
  // const apiUrl = window.location.hostname == 'localhost'
  const apiUrl = hostname == 'localhost'
  ? "'https://localhost:3000'"
  : 'https://api.rickandmorty.com'

  return new DataService(apiUrl);
}

// Aqui injectamos  dataServiceFactory
@Component({
  standalone: true,
  selector: 'app-root',
  template: `<p>{{ data }}</p>`,
  // y es asi como se puede puede agregar los proveedores
  // un componente es un miniModulo
  providers:[
  //  si vas a utilizar dataService que vas a hacer, vas a utilizar un useFactory
  // y a dataServiceFactory podemos pasarle lo que quisieramos
  // cuando quieras usar DataService vas a utilizar una fabrica esa fabrica se  llama cada vez que se quiere usar DataService
  // dependiendo donde se este utilizando (si en el localhost o en una URL )vas a crear DataService con una data u otra
  {provide: DataService, useFactory: dataServiceFactory}
]
})
// No se usa mas el contructor en angular 18, todo es inject, nisiquiera tengo que esperar que esto se "Construya" esto se injecta y directo se puede aplicar la data
export class AppComponent{
  dataService = inject(DataService)
  data = this.dataService.apiUrl();
}

// DEV:COMMENT -> useExisting ? utiliza el existente

@Injectable()
export class BaseService {
  getData(){
    return 'base data';
  }
}

@Injectable()
export class DerivedService {
  baseService = injec(BaseService) //--constructor que va utilizar
  getData(){
    return this.baseService.getData() + '- derived';
  }
}

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<p>{{data}}</p>`,
  providers: [
    BaseService,
    // vas a utilizar tambien DerivedService utilizando el que ta existe por que ya lo injectamos el BaseService
    // cuando DerivedService tenga que utilizar su constructor va utilizar el que ya tenemos , el que ya se instancio para este componente
// Lo vamos a utilizar cuando querramos utilizar 2 tokens de injeccion y queremos que utilizen la misma instancia
    // En este caso cuando utilicemos el DerivedService va utilizar la misma instancia de baseService ya existente en vez de crear una nueva
    {provide: DerivedService, useExisting: BaseService }
  ]
})
export class AppComponent{
  derivedService = inject(DerivedService),
  data: this.derivedService.getData(),
}

 ```







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