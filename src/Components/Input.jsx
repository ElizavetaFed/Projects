import { forwardRef } from "react";

const Input = forwardRef(function Input({ text, type }, ref) {
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
export default Input;
