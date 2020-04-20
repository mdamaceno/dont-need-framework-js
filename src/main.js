import { HashRouter } from './lib/HashRoutes';
import './views/Home';
import './views/About';

const app = document.getElementById('app');
const router = new HashRouter(app);

router.setRoutes([
  { path: '/', component: 'x-home' },
  { path: '/about', component: 'x-about' },
]);

