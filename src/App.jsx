import TodoItem from "./Components/TodoItem";
import FormInput from "./Components/FormInput";
import React from "react";
import EditModal from "./Components/EditModal";
import "./App.css";
import DeleteModal from "./Components/DeleteModal";

class App extends React.Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    isEdit: false,
    isDelete: false,
    editData: {
      id: "",
      title: "",
      ck: false,
    },
  };

  addCheck = (identity, status) => {
    const index = this.state.todos.findIndex((item) => item.id === identity);
    const { id, title, ck } = this.state.todos[index];
    const newdata = {
      id,
      title,
      ck: status,
    };

    const newTodos = this.state.todos;

    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === id) {
        newTodos.splice(i, 1, newdata);
      }
    }

    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
        ck: false,
      },
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  update = () => {
    const { id, title, ck } = this.state.editData;
    const newdata = {
      id,
      title,
      ck,
    };

    const newTodos = this.state.todos;

    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === id) {
        newTodos.splice(i, 1, newdata);
      }
    }

    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
        ck: false,
      },
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  openModal = (id, title, ck) => {
    this.setState({
      isEdit: true,
      editData: {
        id: id,
        title: title,
        ck: ck,
      },
    });
  };

  openDeleteModal = (id, title) => {
    this.setState({
      isDelete: true,
      editData: {
        id: id,
        title: title,
      },
    });
  };

  closeModal = () => {
    this.setState({
      isEdit: false,
      isDelete: false,
    });
  };

  deleteTask = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => item.id != id),
    });

    const todos = JSON.parse(localStorage.getItem("todos")).filter(
      (item) => item.id != id
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  addTask = (text) => {
    let id = 1;
    if (this.state.todos.length > 0) {
      id = this.state.todos[this.state.todos.length - 1].id + 1;
    }

    const newData = {
      id: id,
      title: text,
      ck: false,
    };

    this.setState({
      todos: [...this.state.todos, newData],
    });

    localStorage.setItem(
      "todos",
      JSON.stringify([...this.state.todos, newData])
    );
  };

  cekboks = (todo) => {
    // Get the checkbox
    let checkBox = document.getElementById(`todo-${todo.id}`);

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      // console.log(`checked-${todo.id}`);
      this.addCheck(todo.id, true);
    } else {
      this.addCheck(todo.id, false);
      // console.log(`unchecked-${todo.id}`);
    }
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="bg-gradient-to-tl from-sky-200 to-sky-600 px-5">
        <div className="container  h-screen mx-auto sm:max-w-xl">
          <div className=" w-full  flex flex-col items-center pt-10">
            <h3 className="text-3xl pt-4 py-8 font-bold text-slate-50">
              ToDoList
            </h3>
          </div>
          <div className="rounded-lg overflow-hidden transition">
            <div className="list">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  del={() => this.openDeleteModal(todo.id, todo.title)}
                  edt={() => this.openModal(todo.id, todo.title, todo.ck)}
                  cekboks={this.cekboks}
                />
              ))}
            </div>
            <div className="input">
              <FormInput add={this.addTask} />
            </div>
          </div>
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}
        />

        <DeleteModal
          del={this.state.isDelete}
          close={this.closeModal}
          data={this.state.editData}
          hapus={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
