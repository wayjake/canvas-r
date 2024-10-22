import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import sessions from "../service/session";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
      { title: "Dashboard | Auto Canvas'r" },
      { name: "description", content: "Welcome to the future of political canvassing." },
    ];
  };
  
  export const loader: LoaderFunction = async () => {
    // For demonstration, we'll return the first user from the array
    if (!sessions || sessions.length === 0) {
      return json({ sessions: null});
    }
    return json({  sessions });
  };
  
  export default function Index() {
    const data = useLoaderData<typeof loader>();
  
    return (
      <div className="flex h-screen items-center justify-center bg-gray-800">
        <div className="w-96 bg-gray-200 border-2 border-gray-400 shadow-md">
          <div className="bg-gray-700 text-white px-2 py-1 flex justify-between items-center">
            <span>User Dashboard</span>
            Your name is: {data.sessions[0].name}
          </div>
        </div>
      </div>
    );
  }