import reactLogo from './assets/react.svg';
import angularLogo from './assets/angular.webp';
import javaScriptLogo from './assets/JS.webp';
import typeScriptLogo from './assets/Typescript.webp';
import htmlLogo from './assets/HTML5.webp';
import vueLogo from './assets/Vue.js.webp';
import jestArticle from "./articles/jest_main_methods.md?raw";
import ReduxRTKArticle from "./articles/Redux_RTK.md?raw";
import reactRouterArticle from "./articles/react-router.md?raw";

export const DOCUMENTATION = [
    {
        id: "1",
        title: "Jest and React testing library",
        contents: jestArticle,
        img: reactLogo,
        description: "",
    },
     {
        id: "2",
        title: "Redux & RTK",
        contents: ReduxRTKArticle,
        img: javaScriptLogo,
        description: "",
    }, 
     {
        id: "3",
        title: "React router",
        contents: reactRouterArticle,
        img: javaScriptLogo,
        description: "",
    }, 
     {
        id: "4",
        title: "TypeScript",
        contents: typescriptArticle,
        img: typeScriptLogo,
        description: "", 
    }, 
     {
        id: "5",
        title: "HTML/CSS",
        contents: axiosArticle,
        img: htmlLogo,
        description: "",
    }, 
     {
        id: "6",
        title: "Angular",
        contents: viteArticle,
        img: angularLogo,
        description: "",
    }, 
     {
        id: "7",
        title: "Vue JS",
        contents: hooksArticle,
        img: vueLogo,
        description: "",
    }, 
     {
        id: "8",
        title: "React Native",
        contents: JSXArticle,
        img: reactLogo,
        description: "",
    },
];
