import { html, render } from 'lit-html';
import { component } from 'haunted';
import '../components/ListPages';
import '../components/PageTitle';

function About() {
  return html`
    <c-list-pages></c-list-pages>
    <c-page-title title="About"></c-page-title>
  `;
}

customElements.define('x-about', component(About));

