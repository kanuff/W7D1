export const fetchTodos = () => {
  return $.ajax({
    type: "GET",
    url: "api/todos"
  })
};

export const createTodo = (todo) => {
  return $.ajax({
    type: "POST",
    url: "api/todos",
    data: {
      todo
    }
  })
}

export const updateTodo = (todo) => {
  const id = todo.id;
  return $.ajax({
    type: "PATCH",
    url: `api/todos/${id}`,
    data: {
      todo
    }
  })
}

export const deleteTodo = todo => {
  const id = todo.id;
  return $.ajax({
    type: "DELETE",
    url: `api/todos/${id}`,
  })
}

export const fetchSteps = todo => {
  const todo_id = todo.id;
  return $.ajax({
    type: "GET",
    url: `api/todos/${todo_id}/steps`
  })
}

export const createStep = (todo, step) => {
  const todo_id = todo.id;
  return $.ajax({
    type: "POST",
    url: `api/todos/${todo_id}/steps`,
    data: {
      step
    }
  })
}

export const deleteStep = (step) => {
  return $.ajax({
    type: "DELETE",
    url: `api/steps/${step.id}`
  })
}
