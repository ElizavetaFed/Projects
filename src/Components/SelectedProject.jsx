export default function SelectedProject({ data }) {
  return (
    <div className="w-2/3 mx-auto mt-12 bg-white p-8 rounded-xl space-y-4">
      <div>
        <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
          Title
        </label>
        <p className="text-stone-800">{data.title}</p>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
          Description
        </label>
        <p className="text-stone-600">{data.desc}</p>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
          Due Date
        </label>
        <p className="text-stone-600">{data.date}</p>
      </div>
    </div>
  );
}
