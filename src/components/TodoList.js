import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { v4 as uuid } from '../../node_modules/uuid/dist/esm-browser/index.js';

function TodoList() {
  const data = function () {
    return {
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
  };

  let [tasks, setTasks] = useState(data().tasks);
  let [completedTasks, setCompletedTasks] = useState(data().completedTasks);
  let [task, setTask] = useState(data().task);

  const methods = {
    newTask: {
      handleEvent(e) {
        setTask(() => (task = e.target.value));
      },
    },
    addTask: {
      handleEvent(e) {
        e.preventDefault();

        if (task.trim() !== '') {
          setTasks((tasks) => [...tasks, { id: uuid(), title: task }]);
          setTask(() => (task = ''));
        }
      },
    },
    clearTasks: {
      handleEvent(e) {
        e.preventDefault();

        setTasks(() => []);
        setCompletedTasks(() => []);
      },
    },
    removeTask: {
      handleEvent(e) {
        e.preventDefault();
        const id = e.originalTarget.parentNode.dataset.id;

        const foundTask = tasks.find((task) => task.id === id);

        if (foundTask) {
          setTasks((tasks) => tasks.filter((task) => task.id !== foundTask.id));
        }
      },
    },
    completeTask: {
      handleEvent(e) {
        e.preventDefault();
        const id = e.originalTarget.parentNode.dataset.id;

        const foundTask = tasks.find((task) => task.id === id);

        if (foundTask) {
          setCompletedTasks((completedTasks) => [...completedTasks, foundTask]);
          setTasks((tasks) => tasks.filter((task) => task.id !== foundTask.id));
        }
      },
    },
  };

  const fragment = {
    taskList: (tasks) => {
      if (tasks.length) {
        return html`
          <p><strong>Your tasks</strong></p>
          <ul>
            ${tasks.map((task) => {
              return html`<li data-id=${task.id}>
                ${task.title}
                <button @click=${methods.completeTask}>Done</button>
                <button @click=${methods.removeTask}>x</button>
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

  return html`
    <div>
      <slot name="header">
        <h2>Default header</h2>
      </slot>
      <form @submit=${methods.addTask}>
        <div>
          <label for="todo-new-task">Enter a new task</label><br />
          <input
            type="text"
            id="todo-new-task"
            .value=${task}
            @input=${methods.newTask}
          />
        </div>
        <div>
          <button>Add</button>
          <button @click=${methods.clearTasks}>Clear all</button>
        </div>
      </form>
      <div>
        ${fragment.taskList(tasks)}
      </div>
      <div>
        ${fragment.completedTasks(completedTasks)}
      </div>
    </div>
  `;
}

customElements.define('c-todo-list', component(TodoList));
