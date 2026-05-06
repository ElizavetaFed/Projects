export default function NoProject({ handleCreate }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src="src/assets/no-projects.png"
        className="w-16 h-16 object-contain mx-auto"
        alt="No projects"
      />
      <h2 className="text-xl font-bold my-4 text-stone-600">
        No Project Selected
      </h2>
      <p className="text-stone-500 mb-4">
        Please, select project or create new project
      </p>
      <p className="mt-8">
        <button
          onClick={handleCreate}
          className="px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-300"
        >
          Create new project
        </button>
      </p>
    </div>
  );
}
