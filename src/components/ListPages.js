import { html, render } from '../../node_modules/lit-html/lit-html.js';

const listPages = [
  { uri: '#/', name: 'Home' },
  { uri: '#/about', name: 'About' },
  { uri: '#/todo', name: 'Todo' },
];

class ListPages extends HTMLElement {
  constructor() {
    super();
  }

  template() {
    return html`
      <ul>
        ${listPages.map((lp) => {
          return html`<li><a href=${lp.uri}>${lp.name}</a></li>`;
        })}
      </ul>
    `;
  }

  _render() {
    render(this.template(), this);
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('c-list-pages', ListPages);
