import { HashRouter } from './lib/HashRoutes';
import './views/Home';
import './views/About';
import './views/Todo';

const app = document.getElementById('app');
const router = new HashRouter(app);

router.setRoutes([
  { path: '/', component: 'x-home' },
  { path: '/about', component: 'x-about' },
  { path: '/todo', component: 'x-todo' },
]);
