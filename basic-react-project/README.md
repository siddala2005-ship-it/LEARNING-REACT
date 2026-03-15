# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


lets us start with react 
we are using react with vite 
for importing the default vite and react app 
we need to "npm create vite@latest":it will install all the node modelus and require things
THEN FOR RUNNING THE APP USE"NPM RUN DEV AFTER CD FOLDER NAME"
step 3:
writing markup in jsx:
1.return a single root element 
2.close all the tags 
3.camelcase most of the things 
 note :when we write class in div element we use ClassName instead of class

 topic:react fragment 
 fragment let you group a list of children without adding extra nodes to the DOM BY USING <> AND </> INSTEAD OF <DIV> AND</DIV>

 we can use {} for writing pure javascript 
 next: using of props
       setting defaults values 

CONITIONAL STATMENTS IN REACT:

dynamic styling component:
REACT PART 3:
1.HANDLING CLICKING EVENTS:
IT IS SAME LIKE WE  USED IN JS ,WITH SLIGHT VARIATION 
eg: onclick event 
2.non clickable events
eg:on mouse
3.object handling 
when we use normal form submission then the default value taken place in console so it prevent that we use event.defaultPrent() to see the output in th conssole
4.state :
it is a object which contains some data about the component
the state can change when component changes the component re renders