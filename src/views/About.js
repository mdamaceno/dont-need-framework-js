import { html } from 'https://unpkg.com/lit-html?module';
import { component } from 'https://unpkg.com/haunted/haunted.js';
import '../components/ListPages.js';
import '../components/PageTitle.js';

function About() {
  return html`
    <c-list-pages></c-list-pages>
    <c-page-title title="About"></c-page-title>
  `;
}

customElements.define('x-about', component(About));
