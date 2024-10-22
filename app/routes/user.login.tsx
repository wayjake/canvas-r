import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Auto Canvas'r" },
    { name: "description", content: "Welcome to the future of political canvassing." },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div className="w-96 bg-gray-200 border-2 border-gray-400 shadow-md">
        <div className="bg-gray-700 text-white px-2 py-1 flex justify-between items-center">
          <span>Windows 95 Form</span>
          <div className="flex space-x-1">
            <button className="w-4 h-4 bg-gray-400 text-black text-xs flex items-center justify-center">-</button>
            <button className="w-4 h-4 bg-gray-400 text-black text-xs flex items-center justify-center">x</button>
          </div>
        </div>
        <div className="p-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-2 py-1 border-2 border-gray-600 bg-white focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                className="flex-1 px-2 py-1 border-2 border-gray-600 bg-white focus:outline-none focus:border-gray-800"
              />
              <input
                type="text"
                className="flex-1 px-2 py-1 border-2 border-gray-600 bg-white focus:outline-none focus:border-gray-800"
              />
              <input
                type="text"
                className="flex-1 px-2 py-1 border-2 border-gray-600 bg-white focus:outline-none focus:border-gray-800"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}