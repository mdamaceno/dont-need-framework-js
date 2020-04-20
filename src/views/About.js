import { html, render } from 'lit-html';
import { component } from 'haunted';
import '../components/ListPages';

function About() {
  return html`
    <c-list-pages></c-list-pages>
    <h1>About</h1>
  `;
}

customElements.define('x-about', component(About));

