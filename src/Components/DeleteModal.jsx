import Button from "./Button";

const DeleteModal = ({ del, close, data, hapus }) => {
  if (del) {
    return (
      <div className="bg-black/50 mx-auto absolute inset-0 flex items-center justify-center text-slate-50">
        <div className="w-full max-w-sm container bg-gradient-to-tl from-sky-200 to-sky-500 rounded-xl overflow-hidden animate-show-modal shadow-white/40 shadow-lg">
          <form>
            <div className="p-5 w-full">
              <h3 className="text-center text-3xl font-bold text-slate-50">
                Ingin menghapus?
              </h3>
            </div>
            <div className="px-5 pb-5 w-full">
              <input
                type="text"
                className="w-full bg-slate-200 text-slate-800 outline-none px-5 py-2 rounded-lg placeholder:font-medium font-medium"
                placeholder="Edit Task"
                value={data.title}
                disabled
              />
            </div>
            <div className="flex">
              <div className="w-1/2 py-2 flex justify-end">
                <Button
                  text="Cancel"
                  variant={"edit"}
                  action={() => {
                    close();
                  }}
                  type={"button"}
                />
              </div>
              <div className="w-1/2 py-2 flex justify-start">
                <Button
                  text="Delete"
                  variant={"delete"}
                  action={() => {
                    hapus(data.id);
                    close();
                  }}
                  type={"button"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DeleteModal;
