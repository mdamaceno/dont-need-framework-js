import { html, render } from '../../node_modules/lit-html/lit-html.js';
import '../components/ListPages.js';
import '../components/PageTitle.js';

function Home() {
  return html`
    <c-list-pages></c-list-pages>
    <c-page-title title="Home, sweet home!"></c-page-title>
  `;
}

customElements.define('x-home', component(Home));
