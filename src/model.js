import { action, thunk } from 'easy-peasy'
import uuid from 'uuid'

export default {
  todos: [
    // { id: 1, title: 'Take out trash', completed: true },
    // { id: 2, title: 'Pickup kids from school', completed: false },
    // { id: 3, title: 'Dinner with boss', completed: true },
  ],
  //? Thunks
  fetchTodos: thunk(async actions => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todos = await res.json()
    console.log(res)
    actions.setTodo(todos)

  }),
  //? action
  setTodo: action((state, todos) => {
    state.todos = todos
  }),


  add: action((state, todo) => {
    todo.id = uuid.v4()
    state.todos = [...state.todos, todo]
  }),

  toggle: action((state, id) => {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  }),

  remove: action((state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id)
  })

}