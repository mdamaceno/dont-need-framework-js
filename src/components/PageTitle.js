import { html } from 'lit-html';
import { component } from 'haunted';

function PageTitle({ title }) {
  return html`<h1>${title}</h1>`;
}

PageTitle.observedAttributes = ['title'];

customElements.define('c-page-title', component(PageTitle));
