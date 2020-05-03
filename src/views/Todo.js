import { html, render } from '../../node_modules/lit-html/lit-html.js';
import '../components/ListPages.js';
import '../components/PageTitle.js';
import '../components/TodoList.js';

function Todo() {
  return html`
    <c-list-pages></c-list-pages>
    <c-page-title title="Todo"></c-page-title>
    <c-todo-list>
      <h2 slot="header">Slotted header</h2>
    </c-todo-list>
  `;
}

customElements.define('x-todo', component(Todo));
