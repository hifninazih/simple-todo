import { PropTypes } from "prop-types";

const Button = ({ text = "Button", variant, action, type }) => {
  let style = "bg-sky-500";
  if (variant === "edit") {
    style = "bg-green-500";
  } else if (variant === "delete") {
    style = "bg-red-500";
  }

  return (
    <button
      type={type}
      onClick={action}
      className={`${style} outline-none font-medium px-3 py-1 mx-2 rounded-lg hover:opacity-80 hover:shadow-lg text-zinc-50 transition`}
    >
      {text}
    </button>
  );
};

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Button;
