import React from "react";
import Button from "./Button";
import { useState } from "react";

function FormInput({ add }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const submit = () => {
    // e.PreventDefault();
    if (text !== "") {
      add(text);
      setText("");
    }
  };

  return (
    <>
      <div className="bg-sky-50 flex justify-between px-5 py-3 items-center">
        <div className="w-9/12">
          <input
            type="text"
            value={text}
            onChange={onChange}
            className="w-full font-semibold bg-slate-200 outline-none  px-5 py-2
            focus:bg-gradient-to-tl focus:from-sky-200 focus:to-sky-400 focus:placeholder:text-slate-50 focus:text-slate-50 rounded-full transition"
            placeholder="addTask"
          />
        </div>
        <div>
          <Button text="Add" action={submit} type={"button"} />
        </div>
      </div>
    </>
  );
}

export default FormInput;
