import { html, render } from '../../node_modules/lit-html/lit-html.js';

const listPages = [
  { uri: '#/', name: 'Home' },
  { uri: '#/about', name: 'About' },
  { uri: '#/todo', name: 'Todo' },
];

function ListPages() {
  return html`
    <ul>
      ${listPages.map((lp) => {
        return html`<li><a href=${lp.uri}>${lp.name}</a></li>`;
      })}
    </ul>
  `;
}

customElements.define('c-list-pages', component(ListPages));
