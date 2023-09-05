import {Router} from '@vaadin/router';

const router = new Router(document.querySelector(".main__container"));
router.setRoutes([
  {path: '/', component: 'chat-element'},
  {path: '/users', component: 'x-user-list'}
]); 