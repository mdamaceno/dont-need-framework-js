import { HashRouter } from './lib/HashRoutes.js';
import './views/Home.js';
import './views/About.js';
import './views/Todo.js';

function initApp() {
  const app = document.getElementById('app');
  const router = new HashRouter(app);

  router.setRoutes([
    { path: '/', component: 'x-home' },
    { path: '/about', component: 'x-about' },
    { path: '/todo', component: 'x-todo' },
  ]);
}

export default initApp;
