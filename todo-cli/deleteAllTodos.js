const { Todo } = require("./models/index");

async function deleteAllTodos() {
  try {
    await Todo.destroy({
      where: {},
      truncate: true,
    });
    console.log("All todo items deleted!");
  } catch (error) {
    console.error("Error deleting todo items:", error);
  }
}

deleteAllTodos();
