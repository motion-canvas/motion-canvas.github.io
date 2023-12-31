"use strict";(self.webpackChunk_motion_canvas_docs=self.webpackChunk_motion_canvas_docs||[]).push([[494],{876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2665:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(1263),o=t(6277),i=t(2784),r=t(9817),s=t(7896);function l(e){let{width:n=24,height:t=24,...a}=e;return i.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:n,height:t,"aria-hidden":!0},a),i.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}))}const c={container:"container_lQCo",small:"small_As57",banner:"banner_A4QS",player:"player_tELG",link:"link_BTzN",icon:"icon_wSGd"};function p(e){let{name:n}=e;const t=`https://github.com/motion-canvas/motion-canvas/blob/main/packages/examples/src/scenes/${n}.tsx`;return i.createElement(r.Z,{to:t,className:(0,o.Z)("padding--sm",c.link)},i.createElement("span",null,"View source code"),i.createElement(l,{className:c.icon}))}function d(e){let{name:n,banner:t,small:a,link:r}=e;return i.createElement("div",{className:(0,o.Z)(c.container,t&&c.banner,a&&c.small)},i.createElement("motion-canvas-player",{class:c.player,src:`/examples/${n}.js`,auto:t}),i.createElement(p,{name:r||n}))}a.Z.canUseDOM&&t.e(7067).then(t.bind(t,7067))},6384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(7896),o=(t(2784),t(876)),i=t(2665),r=t(6109);const s="import {\n  Circle,\n  Node,\n  NodeProps,\n  Rect,\n  colorSignal,\n  initial,\n  signal,\n} from '@motion-canvas/2d';\nimport {\n  Color,\n  ColorSignal,\n  PossibleColor,\n  SignalValue,\n  SimpleSignal,\n  all,\n  createRef,\n  createSignal,\n  easeInOutCubic,\n  tween,\n} from '@motion-canvas/core';\n\nexport interface SwitchProps extends NodeProps {\n  initialState?: SignalValue<boolean>;\n  accent?: SignalValue<PossibleColor>;\n}\n\nexport class Switch extends Node {\n  @initial(false)\n  @signal()\n  public declare readonly initialState: SimpleSignal<boolean, this>;\n\n  @initial('#68ABDF')\n  @colorSignal()\n  public declare readonly accent: ColorSignal<this>;\n\n  private isOn: boolean;\n  private readonly indicatorPosition = createSignal(0);\n  private readonly offColor = new Color('#242424');\n  private readonly indicator = createRef<Circle>();\n  private readonly container = createRef<Rect>();\n\n  public constructor(props?: SwitchProps) {\n    super({\n      ...props,\n    });\n\n    this.isOn = this.initialState();\n    this.indicatorPosition(this.isOn ? 50 : -50);\n\n    this.add(\n      <Rect\n        ref={this.container}\n        fill={this.isOn ? this.accent() : this.offColor}\n        size={[200, 100]}\n        radius={100}\n      >\n        <Circle\n          x={() => this.indicatorPosition()}\n          ref={this.indicator}\n          size={[80, 80]}\n          fill=\"#ffffff\"\n        />\n      </Rect>,\n    );\n  }\n\n  public *toggle(duration: number) {\n    yield* all(\n      tween(duration, value => {\n        const oldColor = this.isOn ? this.accent() : this.offColor;\n        const newColor = this.isOn ? this.offColor : this.accent();\n\n        this.container().fill(\n          Color.lerp(oldColor, newColor, easeInOutCubic(value)),\n        );\n      }),\n\n      tween(duration, value => {\n        const currentPos = this.indicator().position();\n\n        this.indicatorPosition(\n          easeInOutCubic(value, currentPos.x, this.isOn ? -50 : 50),\n        );\n      }),\n    );\n    this.isOn = !this.isOn;\n  }\n}\n",l={sidebar_position:6,slug:"/custom-components"},c="Custom Components",p={unversionedId:"components/custom-components",id:"components/custom-components",title:"Custom Components",description:"Components are classes like Rect and",source:"@site/docs/components/custom-components.mdx",sourceDirName:"components",slug:"/custom-components",permalink:"/docs/custom-components",draft:!1,editUrl:"https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/docs/components/custom-components.mdx",tags:[],version:"current",lastUpdatedBy:"Levi Rizki Saputra",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/custom-components"},sidebar:"docs",previous:{title:"Path",permalink:"/docs/path"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},d={},u=[],m={toc:u},h="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(h,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-components"},"Custom Components"),(0,o.kt)(i.Z,{name:"components",banner:!0,mdxType:"AnimationPlayer"}),(0,o.kt)("p",null,"Components are classes like ",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Rect"},(0,o.kt)("inlineCode",{parentName:"a"},"Rect"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Circle"},(0,o.kt)("inlineCode",{parentName:"a"},"Circle"))," that can abstract rendering and data\nfunctionality into reusable, modular pieces. To use a component in a scene, add\nit to the view and provide arguments to the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Switch initialState={false} />\n")),(0,o.kt)("p",null,"To define what arguments a component will take, first define an interface. All\nproperties of the interface must be wrapped in\n",(0,o.kt)("a",{parentName:"p",href:"/api/core/signals#SignalValue"},(0,o.kt)("inlineCode",{parentName:"a"},"SignalValue<>"))," as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"//  You can extend an existing props interface\n//  such as LayoutProps, ShapeProps or NodeProps to\n//  include their properties alongside the ones you\n//  define\n\nexport interface SwitchProps extends NodeProps {\n  initialState?: SignalValue<boolean>;\n\n  // We don't use color here because we want\n  // to be able to pass hex strings and rgb\n  // values to accent rather than a `Color`\n  accent?: SignalValue<PossibleColor>;\n}\n")),(0,o.kt)("p",null,"Next, create a class for your components. The component class must extend\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))," or one of its subclasses. If you don't want to\ninherit any methods from an existing component, extend your class from ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),".\nWe advise extending from the component most similar to the component you are\nbuilding. For instance, if you were to make a component including a\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Layout"},(0,o.kt)("inlineCode",{parentName:"a"},"Layout")),", you should extend\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Layout"},(0,o.kt)("inlineCode",{parentName:"a"},"Layout"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/LayoutProps"},(0,o.kt)("inlineCode",{parentName:"a"},"LayoutProps")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface SwitchProps extends NodeProps {\n  // properties\n}\n\nexport class Switch extends Node {\n  // implementation\n}\n")),(0,o.kt)("p",null,"To use the properties defined in the interface, your class ",(0,o.kt)("em",{parentName:"p"},"must")," contain a\nproperty with the same name. Motion Canvas provides type decorators to\nfacilitate this like ",(0,o.kt)("inlineCode",{parentName:"p"},"@initial()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@signal()"),". Click ",(0,o.kt)("a",{parentName:"p",href:"/docs/signals"},"here"),"\nfor more information on signals."),(0,o.kt)("p",null,"Here is an example of how you would define such properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export class Switch extends Node {\n  // @initial - optional, sets the property to an\n  // initial value if it was not provided.\n  @initial(false)\n  // @signal - is required by motion canvas\n  // for every prop that was passed in.\n  @signal()\n  public declare readonly initialState: SimpleSignal<boolean, this>;\n\n  @initial('#68ABDF')\n  // @colorSignal - some complex types provide a dedicated decorator for\n  // signals that takes care of parsing.\n  // In this case, `accent` will automatically convert strings into `Color`s\n  @colorSignal()\n  public declare readonly accent: ColorSignal<this>;\n  // ...\n}\n")),(0,o.kt)("p",null,"Notice how colors are wrapped in ",(0,o.kt)("inlineCode",{parentName:"p"},"ColorSignal<>")," while any other type (even\nuser-defined ones) are wrapped in ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleSignal<>"),". The type does not need to be\npassed to color signal as Motion Canvas knows that it must be of a\ncolor-resolvable type. In both, the class is passed at the end of the wrapper to\nregister the signal to the class. Properties must be initialised with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"declare")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," keywords."),(0,o.kt)("p",null,"Normal properties can be defined as normal. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export class Switch extends Node {\n  public constructor(props?: SwitchProps) {\n    super({\n      // If you wanted to ensure that layout was always\n      // true for this component, you could add it here\n      // as such:\n      // layout: true\n      ...props,\n    });\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," parameter can also be useful outside the ",(0,o.kt)("inlineCode",{parentName:"p"},"super()")," call to access\nyour data elsewhere. For example, if you were building a component to display an\narray, you could use props to set the color of every\n",(0,o.kt)("a",{parentName:"p",href:"/api/2d/components/Rect"},"Rect")," in the array."),(0,o.kt)("p",null,"Now we can add elements to the view by using ",(0,o.kt)("inlineCode",{parentName:"p"},"this.add()"),", much like you would\nadd to a scene's view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export class Switch extends Node {\n  public constructor(props?: SwitchProps) {\n    // ...\n    this.add(\n      <Rect>\n        <Circle />\n      </Rect>,\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Since this is a class, you can also add methods. This is especially useful when\nwanting to animate a component easily. Here is an example of a method for\ntoggling our switch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export class Switch extends Node {\n  // ...\n  public *toggle(duration: number) {\n    yield* all(\n      tween(duration, value => {\n        // ...\n      }),\n      tween(duration, value => {\n        // ...\n      }),\n    );\n    this.isOn = !this.isOn;\n  }\n}\n")),(0,o.kt)("p",null,"Here is the source code for the component we have built throughout this guide:"),(0,o.kt)(r.Z,{language:"tsx",mdxType:"CodeBlock"},s))}f.isMDXComponent=!0}}]);