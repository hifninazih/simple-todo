import Button from "./Button";

const EditModal = ({ edit, close, change, data, update }) => {
  if (edit) {
    return (
      <div className="bg-black/50 mx-auto absolute inset-0 flex items-center justify-center text-slate-50">
        <div className="w-full max-w-sm container bg-gradient-to-tl from-sky-200 to-sky-500 rounded-xl overflow-hidden animate-show-modal shadow-white/40 shadow-lg">
          <div className="p-5 w-full">
            <h3 className="text-center text-3xl font-bold text-slate-50">
              Edit Task
            </h3>
          </div>
          <div className="px-5 pb-5 w-full">
            <input
              type="text"
              className="w-full bg-slate-200 text-slate-800 outline-none px-5 py-2 rounded-lg placeholder:font-medium font-medium"
              placeholder="Edit Task"
              value={data.title}
              onChange={change}
              autoFocus
            />
          </div>
          <div className="flex">
            <div className="w-1/2 py-2 flex justify-end">
              <Button
                text="Done"
                variant={"edit"}
                action={() => {
                  update(data);
                }}
                onChange={change}
                type={"button"}
              />
            </div>
            <div className="w-1/2 py-2 flex justify-start">
              <Button
                text="Cancel"
                variant={"delete"}
                action={() => {
                  close();
                }}
                type={"button"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EditModal;
