import { html, render } from '../../node_modules/lit-html/lit-html.js';
import '../components/ListPages.js';
import '../components/PageTitle.js';
import '../components/TodoList.js';

class Todo extends HTMLElement {
  constructor() {
    super();
  }

  template() {
    return html`
      <c-list-pages></c-list-pages>
      <c-page-title title="Todo"></c-page-title>
      <c-todo-list>
        <h2 slot="header">Slotted header</h2>
      </c-todo-list>
    `;
  }

  _render() {
    render(this.template(), this);
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('x-todo', Todo);
