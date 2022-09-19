import { ADD_USER, DELETE_USER, UPDATE_USER } from "./actions";
import defaultUsers from "./users";

export const reducer = (state = defaultUsers, action) => {
  let newTodos;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_USER:
      newTodos = [...state];
      newTodos.push(action.payload);
      console.log("action.payload: ", action.payload)
      return newTodos;
    case DELETE_USER:
      newTodos = [...state];
      newTodos = newTodos.filter((user) => user.id !== action.payload);
      return newTodos;
    case UPDATE_USER:
      newTodos = [...state];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }
  }
  return state;
};
