import { html } from 'lit-html';
import { component } from 'haunted';
import '../components/ListPages';
import '../components/PageTitle';
import '../components/TodoList';

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
