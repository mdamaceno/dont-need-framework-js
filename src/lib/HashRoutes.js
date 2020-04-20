import { Router } from '@vaadin/router';

export class HashRouter extends Router {
  __updateBrowserHistory(pathname, replace) {
    if (window.location.hash.substring(1) !== pathname) {
      window.location.hash = '#' + pathname.pathname;
    }
  }
}

function globalHashChangeHandler(event) {
  const pathname = event.newURL.indexOf('#') > -1
    ? event.newURL.substring(event.newURL.indexOf('#') + 1)
    : '/';
  Router.go(pathname);
}

const HASHCHANGE = {
  activate() {
    window.addEventListener('hashchange', globalHashChangeHandler, false);
  },

  inactivate() {
    window.removeEventListener('hashchange', globalHashChangeHandler, false);
  }
};

Router.NavigationTrigger = [HASHCHANGE];

export default HashRouter;
