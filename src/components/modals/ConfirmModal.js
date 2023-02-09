import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useQueryClient } from "react-query";

export default function ConfirmModal({
  closeModal,
  deleteCardId,
  APIKEY,
  alertTodo,
}) {
  const queryClient = useQueryClient()
  // DELETE - REQUEST
  const deleteRow = async (id) => {
    // console.log(id, APIKEY);
    let res = await fetch(`https://sheetdb.io/api/v1/${APIKEY}/ID/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(res.ok);
    alertTodo("Deleted", res.ok);
    if (res.ok) {
      document.getElementById(String(id)).style={display:"none"};
      let response = await res.json();
      queryClient.invalidateQueries('card', { exact: true });
      console.log(response);
    } else {
      throw Error(res.message);
    }
  };
  const handleOnDelete = () => {
    closeModal();
    deleteRow(deleteCardId);
  };

  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-11/12 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col items-center dark:bg-slate-700 dark:text-white">
                  <Dialog.Title as="h3">
                    <i className="mb-3 fa-solid fa-circle-exclamation text-5xl text-red-600"></i>
                  </Dialog.Title>
                  <h2 className="text-2xl font-medium">Are you sure?</h2>
                  <p>You want to delete Card No.{deleteCardId}</p>
                  <div className="w-full mt-4 flex justify-evenly">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                      onClick={handleOnDelete}
                    >
                      Yes,I'm sure!
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      No, cancel!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
