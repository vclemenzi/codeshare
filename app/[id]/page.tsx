"use client";
import { MdModeEdit } from "react-icons/md";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

export default function Id(
    { params }: { params: { id: string } }
) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/api/${params.id}`)
        .then(async (res) => {
            if (res.status === 200) {
                setContent((await res.json()).content);
            } else {
                window.location.href = "/?error=not-found";
            }
        })
  }, [params.id]);

  const handleClone = () => {
    window.location.href = `/?clone=${params.id}`;
  };

  return (
    <main>
      <nav className="flex justify-between items-center p-3 bg-slate-200">
        <div className="flex items-center">
          <h1>[CodeShare]</h1>
        </div>
        <div>
          <button
            className="flex items-center px-3 py-2 text-sm font-medium leading-4 transition-colors duration-150 border border-transparent rounded-md text-slate-900 bg-slate-300 hover:bg-slate-200 focus:outline-none focus:shadow-outline-blue active:bg-slate-200"
            onClick={handleClone}
          >
            <MdModeEdit className="mr-2 w-5 h-5" />
            Clone
          </button>
        </div>
      </nav>

      <div className="flex flex-col h-screen">
        <Editor
          height="95vh"
          defaultLanguage="text"
          className="mt-2"
          defaultValue="Fetching content, please wait..."
          value={content}
          options={{
            readOnly: true,
          }}
          onChange={(value) => setContent(value as string)}
        />
      </div>
    </main>
  );
}
