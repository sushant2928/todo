export const findItemIndex = (todos, id) => {
  const index = todos.findIndex((item) => {
    return item.id === id;
  });
  return index;
};
