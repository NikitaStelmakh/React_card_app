import jestLogo from './assets/jest.png';
import reactRouterLogo from './assets/reactRouter.png';
import regexLogo from './assets/regex.svg';
import markdownLogo from './assets/markdown.png';
import typeScriptLogo from './assets/Typescript.webp';
import axiosLogo from './assets/axios.png';
import viteLogo from './assets/viteLogo.webp';
import ReduxLogo from './assets/redux2.svg';
import jestArticle from "./articles/jest_main_methods.md?raw";
import ReduxRTKArticle from "./articles/Redux_RTK.md?raw";
import reactRouterArticle from "./articles/react_router.md?raw";
import typeScriptArticle from "./articles/typeScript.md?raw";
import axiosArticle from "./articles/axios.md?raw";
import viteArticle from "./articles/vite.md?raw";
import markdownArticle from "./articles/markdown.md?raw";
import RegexArticle from "./articles/regex.md?raw";


export const DOCUMENTATION = [
    {
        id: "1",
        title: "Jest and React testing library",
        contents: jestArticle,
        img: jestLogo,
        description: "",
    },
     {
        id: "2",
        title: "Redux & RTK",
        contents: ReduxRTKArticle,
        img: ReduxLogo,
        description: "",
    }, 
     {
        id: "3",
        title: "React router",
        contents: reactRouterArticle,
        img: reactRouterLogo,
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
        img: axiosLogo,
        description: "",
    }, 
     {
        id: "6",
        title: "Vite",
        contents: viteArticle,
        img: viteLogo,
        description: "",
    }, 
     {
        id: "7",
        title: "Markdown",
        contents: markdownArticle,
        img: markdownLogo,
        description: "",
    }, 
     {
        id: "8",
        title: "Regex",
        contents: RegexArticle,
        img: regexLogo,
        description: "",
    },
];

export default DOCUMENTATION