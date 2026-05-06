import { useRef } from "react";
import { Input } from "./Menu";

export default function NewProject({ onSave, handleCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (!enteredTitle.trim() || !enteredDescription.trim() || !enteredDueDate) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    onSave({
      title: enteredTitle,
      desc: enteredDescription,
      date: enteredDueDate,
    });

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <div className="w-2/3 mx-auto mt-12 bg-white p-8 rounded-xl space-y-6">
      <menu className="flex justify-end">
        <li>
          <button
            onClick={handleCancel}
            className="text-stone-900 text-s px-4 py-2"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-stone-900 text-white px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>

      <div className="space-y-4">
        <Input ref={title} text="Title" type="text" />
        <Input ref={description} text="Description" type="text" />
        <Input ref={dueDate} text="Due Date" type="date" />
      </div>
    </div>
  );
}
