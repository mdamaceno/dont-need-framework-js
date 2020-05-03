import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { v4 as uuid } from '../../node_modules/uuid/dist/esm-browser/index.js';

class TodoList extends HTMLElement {
  constructor() {
    super();
    this.data = {
      tasks: [
        { id: 'fef88a3f-a8ce-4759-80e0-eea65bcdffb2', title: 'Do the dishes' },
        {
          id: '0149ca69-2093-474d-8769-fc15fced5164',
          title: 'Rewatch Westworld to make a new theory',
        },
        { id: 'fb4316c4-d85c-4c48-9525-aab7862e6342', title: 'Play videogame' },
      ],
      completedTasks: [],
      task: '',
    };
  }

  setup() {
    const _this = this;

    this.methods = {
      newTask: {
        handleEvent(e) {
          _this.data.task = e.target.value;
          _this._render();
        },
      },
      addTask: {
        handleEvent(e) {
          e.preventDefault();

          if (_this.data.task.trim() !== '') {
            _this.data.tasks = [
              ..._this.data.tasks,
              { id: uuid(), title: _this.data.task },
            ];
            _this.data.task = '';
            _this._render();
          }
        },
      },
      clearTasks: {
        handleEvent(e) {
          e.preventDefault();

          _this.data.tasks = [];
          _this.data.completedTasks = [];
          _this._render();
        },
      },
      removeTask: {
        handleEvent(e) {
          e.preventDefault();
          const id = e.originalTarget.parentNode.dataset.id;

          const foundTask = _this.data.tasks.find((task) => task.id === id);

          if (foundTask) {
            _this.data.tasks = _this.data.tasks.filter(
              (task) => task.id !== foundTask.id
            );
            _this._render();
          }
        },
      },
      completeTask: {
        handleEvent(e) {
          e.preventDefault();
          const id = e.originalTarget.parentNode.dataset.id;

          const foundTask = _this.data.tasks.find((task) => task.id === id);

          if (foundTask) {
            _this.data.completedTasks = [
              ..._this.data.completedTasks,
              foundTask,
            ];
            _this.data.tasks = _this.data.tasks.filter(
              (task) => task.id !== foundTask.id
            );
            _this._render();
          }
        },
      },
    };

    this.fragment = {
      taskList: (tasks) => {
        if (tasks.length) {
          return html`
            <p><strong>Your tasks</strong></p>
            <ul>
              ${tasks.map((task) => {
                return html`<li data-id=${task.id}>
                  ${task.title}
                  <button @click=${this.methods.completeTask}>Done</button>
                  <button @click=${this.methods.removeTask}>x</button>
                </li>`;
              })}
            </ul>
          `;
        }

        return 'Wow! You have nothing to do!';
      },
      completedTasks: (completedTasks) => {
        if (completedTasks.length) {
          return html`
            <p><strong>Completed tasks</strong></p>
            <ul>
              ${completedTasks.map((completedTask) => {
                return html`<li>${completedTask.title}</li>`;
              })}
            </ul>
          `;
        }
      },
    };
  }

  template() {
    return html`
      <div>
        <slot name="header">
          <h2>Default header</h2>
        </slot>
        <form @submit=${this.methods.addTask}>
          <div>
            <label for="todo-new-task">Enter a new task</label><br />
            <input
              type="text"
              id="todo-new-task"
              .value=${this.data.task}
              @input=${this.methods.newTask}
            />
          </div>
          <div>
            <button>Add</button>
            <button @click=${this.methods.clearTasks}>Clear all</button>
          </div>
        </form>
        <div>
          ${this.fragment.taskList(this.data.tasks)}
        </div>
        <div>
          ${this.fragment.completedTasks(this.data.completedTasks)}
        </div>
      </div>
    `;
  }

  _render() {
    render(this.template(), this);
  }

  connectedCallback() {
    this.setup();
    this._render();
  }
}

customElements.define('c-todo-list', TodoList);
