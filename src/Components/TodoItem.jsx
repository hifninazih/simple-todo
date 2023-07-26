import Button from "./Button";
import { PropTypes } from "prop-types";

const TodoItem = ({ todo, del, edt }) => {
  return (
    <div className="bg-sky-50 flex justify-between px-5 py-3 items-center">
      <p className="text-xl font-bold">{todo}</p>
      <div>
        <Button text="Edit" variant={"edit"} action={edt} type={"button"} />
        <Button text="Delete" variant={"delete"} action={del} type={"button"} />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
  edt: PropTypes.func.isRequired,
};

export default TodoItem;
