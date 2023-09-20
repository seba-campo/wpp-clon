import {Router} from '@vaadin/router';
import { state } from './state';

const router = new Router(document.querySelector(".main__container"));
const cs = state.getState();

if(!cs.deployed){
  router.setRoutes([
    {path: '/', component: 'home-page'},
    {path: '/about', component: 'about-page'},
    {path: '/experiences', component: 'exp-page'},
    {path: '/works', component: 'works-page'},
    {path: '/contact', component: 'contact-page'}
  ]); 
}else if(cs.deployed){
  router.setRoutes([
    {path: '/wpp-clon/', component: 'home-page'},
    {path: '/wpp-clon/about', component: 'about-page'},
    {path: '/wpp-clon/experiences', component: 'exp-page'},
    {path: '/wpp-clon/works', component: 'works-page'},
    {path: '/wpp-clon/contact', component: 'contact-page'}
  ]); 
}