"use client";
import { HiOutlineSave } from "react-icons/hi";
import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");

  const handleSave = () => {
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({ content }),
    }).then(async (res) => {
      if (res.status === 201) {
        window.location.href = (await res.json()).id;
      }
    });
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
            onClick={handleSave}
          >
            <HiOutlineSave className="mr-2 w-5 h-5" />
            Save
          </button>
        </div>
      </nav>

      <div className="flex flex-col h-screen">
        <Editor
          height="95vh"
          defaultLanguage="text"
          className="mt-2"
          value={content}
          onChange={(value) => setContent(value as string)}
        />
      </div>
    </main>
  );
}
