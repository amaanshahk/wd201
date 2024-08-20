/* eslint-disable no-undef */
const todoList = require("../todo");

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1)),
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1)),
);

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Testing the To Do List", () => {
  beforeAll(() => {
    add({
      title: "Submit assignment",
      dueDate: yesterday,
      completed: false,
    });
  });

  test("Checks creating a new todo.", () => {
    const todoItemsCount = all.length;
    add({
      title: "Service vehicle",
      dueDate: today,
      completed: false,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Checks marking a todo as completed.", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Checks retrieval of overdue items.", () => {
    expect(overdue()).toEqual([all[0]]);
  });
  test("Checks retrieval of due today items.", () => {
    expect(dueToday()).toEqual([all[1]]);
  });
  test("Checks retrieval of due later items.", () => {
    add({
      title: "File taxes",
      dueDate: tomorrow,
      completed: false,
    });
    expect(dueLater()).toEqual([all[2]]);
  });
});
