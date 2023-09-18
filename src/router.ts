import {Router} from '@vaadin/router';

const router = new Router(document.querySelector(".main__container"));
router.setRoutes([
  {path: '/', component: 'about-page'},
  {path: '/experiences', component: 'exp-page'},
  {path: '/works', component: 'works-page'},
  {path: '/contact', component: 'contact-page'}
]); 