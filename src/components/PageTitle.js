import { html, render } from '../../node_modules/lit-html/lit-html.js';

function PageTitle({ title }) {
  return html`<h1>${title}</h1>`;
}

PageTitle.observedAttributes = ['title'];

customElements.define('c-page-title', component(PageTitle));
