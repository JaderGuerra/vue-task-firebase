//import HomePage from "../page/HomePage.vue";
//import FormPage from "../page/FormPage.vue";
//import ContactoPage from "../page/ContactoPage.vue";

const HomePage = resolve => {
   require.ensure(["../page/HomePage.vue"], () => {
      resolve(require("../page/HomePage.vue"));
   })
}
const FormPage = resolve => {
   require.ensure(["../page/FormPage.vue"], () => {
      resolve(require("../page/FormPage.vue"));
   })
}
const ContactoPage = resolve => {
   require.ensure(["../page/ContactoPage.vue"], () => {
      resolve(require("../page/ContactoPage.vue"));
   })
}

export const  rutas =[
   {
      path:'', component: HomePage,name:'Home'
   },
   {
      path:'/formulario', component: FormPage,name:'Formulario'
   },
   {
      path:'/contacto', component: ContactoPage,name:'Contact'
   },
   {
      path:'*', redirect:'/'
   },
]