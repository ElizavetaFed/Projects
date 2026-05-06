import { forwardRef } from "react";

export const Input = forwardRef(function Input({ text, type }, ref) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
        {text}
      </label>
      <input
        ref={ref}
        type={type}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </div>
  );
});

export default function Menu({ projects, onSelectProject, handleCreate }) {
  function handleClick(id) {
    onSelectProject(id);
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase text-stone-200">Your Projects</h2>
      <div>
        <button
          onClick={handleCreate}
          className="px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-6">
        {projects.projectsList.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => handleClick(project.id)}
              className="w-full text-left px-2 py-2 rounded-sm m-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
