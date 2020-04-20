import { html, render } from 'lit-html';
import { component } from 'haunted';
import '../components/ListPages';

function Home() {
  return html`
    <c-list-pages></c-list-pages>
    <h1>Home, sweet Home!</h1>
  `;
}

customElements.define('x-home', component(Home));

