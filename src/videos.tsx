import reactLogo from './assets/react.svg';
import angularLogo from './assets/angular.webp';
import javaScriptLogo from './assets/JS.webp';
import typeScriptLogo from './assets/Typescript.webp';
import htmlLogo from './assets/HTML5.webp';
import vueLogo from './assets/Vue.js.webp';
import jestArticle from "./articles/jest_main_methods.md?raw";
import ReduxRTKArticle from "./articles/Redux_RTK.md?raw";
import reactRouterArticle from "./articles/react_router.md?raw";
import typeScriptArticle from "./articles/typeScript.md?raw";
import axiosArticle from "./articles/axios.md?raw";
import viteArticle from "./articles/vite.md?raw";
import markdownArticle from "./articles/markdown.md?raw";
import JSXArticle from "./articles/jsx.md?raw";


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
        contents: typeScriptArticle,
        img: typeScriptLogo,
        description: "", 
    }, 
     {
        id: "5",
        title: "Axios",
        contents: axiosArticle,
        img: htmlLogo,
        description: "",
    }, 
     {
        id: "6",
        title: "Vite",
        contents: viteArticle,
        img: angularLogo,
        description: "",
    }, 
     {
        id: "7",
        title: "markdown",
        contents: markdownArticle,
        img: vueLogo,
        description: "",
    }, 
     {
        id: "8",
        title: "JSX",
        contents: JSXArticle,
        img: reactLogo,
        description: "",
    },
    {
        id: "9",
        title: "Regex",
        contents: JSXArticle,
        img: reactLogo,
        description: "",
    },
];
