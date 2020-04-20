import { html, render } from 'lit-html';
import { component } from 'haunted';
import '../components/ListPages';
import '../components/PageTitle';

function Home() {
  return html`
    <c-list-pages></c-list-pages>
    <c-page-title title="Home, sweet home!"></c-page-title>
  `;
}

customElements.define('x-home', component(Home));

