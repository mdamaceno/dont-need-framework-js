import { html, render } from '../../node_modules/lit-html/lit-html.js';
import '../components/ListPages.js';
import '../components/PageTitle.js';

class About extends HTMLElement {
  constructor() {
    super();
  }

  template() {
    return html`
      <c-list-pages></c-list-pages>
      <c-page-title title="About"></c-page-title>
    `;
  }

  _render() {
    render(this.template(), this);
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('x-about', About);
