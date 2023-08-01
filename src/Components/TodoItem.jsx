import Button from "./Button";
import { PropTypes } from "prop-types";

const TodoItem = ({ todo, del, edt, cekboks }) => {
  return (
    <div className="bg-sky-50 flex px-2 py-2 justify-between items-center">
      <div className="rounded-lg px-5 py-2 mr-3 flex-auto">
        <input
          type="checkbox"
          name={`todo-${todo.id}`}
          id={`todo-${todo.id}`}
          className="mr-5  checked:bg-red-500"
          onClick={() => cekboks(todo)}
          checked={todo.ck}
        />
        <label
          className={`text-xl font-bold inline-block ${
            todo.ck ? "line-through text-slate-500" : ""
          }`}
          for={`todo-${todo.id}`}
        >
          {todo.title}
        </label>
      </div>
      <div className="">
        <Button text="Edit" variant={"edit"} action={edt} type={"button"} />
        <Button text="Delete" variant={"delete"} action={del} type={"button"} />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  // todo: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
  edt: PropTypes.func.isRequired,
};

export default TodoItem;
