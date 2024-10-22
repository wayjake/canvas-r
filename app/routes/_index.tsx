import { json, redirect, type ActionFunction, type MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import sessions from "../service/session";

export const meta: MetaFunction = () => {
  return [
    { title: "Auto Canvas'r" },
    { name: "description", content: "Welcome to the future of political canvassing." },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const code1 = formData.get("code_1") as string;
  const code2 = formData.get("code_2") as string;
  const code3 = formData.get("code_3") as string;

  const combinedCode = `${code1}${code2}${code3}`;
  
  if (combinedCode !== process.env.CUR_ACCESS_CODE) {
    return json({ error: "Invalid access code" });
  }

  sessions.push ({name});

  return redirect("/user/dashboard");
};

export default function Index() {
  const actionData = useActionData<typeof action>();

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
          {actionData?.error && (
            <div className="mb-4 bg-gray-300 border-2 border-gray-400 p-2 text-red-600">
              {actionData.error}
            </div>
          )}
          <Form method="post" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-1 text-gray-800">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-2 py-1 border-2 border-gray-600 bg-white text-gray-800 focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                name="code_1"
                className="w-1/3 px-2 py-1 border-2 border-gray-600 bg-white text-gray-800 focus:outline-none focus:border-gray-800"
              />
              <input
                type="text"
                name="code_2"
                className="w-1/3 px-2 py-1 border-2 border-gray-600 bg-white text-gray-800 focus:outline-none focus:border-gray-800"
              />
              <input
                type="text"
                name="code_3"
                className="w-1/3 px-2 py-1 border-2 border-gray-600 bg-white text-gray-800 focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 bg-gray-300 border-2 border-gray-400 shadow-md active:shadow-inner active:translate-y-px text-gray-800">
                Log In
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
