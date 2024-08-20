/* eslint-disable no-unused-vars */
const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Second To DO",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created to do with ID: ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Found ${totalCount} items in the table!`);
  } catch (error) {
    console.error(error);
  }
};

const findItems = async () => {
  try {
    const todos = await Todo.findAll({});
    const todoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};

const findOneItem = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: false,
      },
      order: [["id", "DESC"]],
    });
    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};

const updateTodo = async (id) => {
  try {
    await Todo.update(
      { completed: true },
      {
        where: {
          id: id,
        },
      },
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteTodo = async (id) => {
  try {
    const count = await Todo.destroy({
      where: {
        id: id,
      },
    });
    console.log(`Deleted ${count} rows!`);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // await createTodo();
  // await countItems();
  await findItems();
  await deleteTodo(2);
  await findItems();
})();
