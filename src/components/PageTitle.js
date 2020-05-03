import { html, render } from '../../node_modules/lit-html/lit-html.js';

class PageTitle extends HTMLElement {
  constructor() {
    super();
  }

  setup() {
    this.props = {
      title: this.getAttribute('title'),
    };
  }

  template() {
    return html`<h1>${this.props.title}</h1>`;
  }

  _render() {
    render(this.template(), this);
  }

  connectedCallback() {
    this.setup();
    this._render();
  }
}

customElements.define('c-page-title', PageTitle);
