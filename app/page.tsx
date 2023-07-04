"use client";
import { HiOutlineSave } from "react-icons/hi";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import swal from '@sweetalert/with-react';
import { NotFound } from "@/componets/alerts/NotFound";

export default function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const options = new URLSearchParams(window.location.search);

    if (options.has("clone")) {
      fetch(`/api/${options.get("clone")}`)
        .then(async (res) => {
          if (res.status === 200) {
            setContent((await res.json()).content);
          } else {
            window.location.href = "/?error=not-found";
          }
        });
    } else if (options.get("error") == "not-found") {
      swal({
        icon: "error",
        buttons: {},
        content: (<NotFound />)
      });
    }
  }, []);

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
            className="flex items-center px-3 py-2 text-sm font-medium leading-4 transition-colors duration-150 border-transparent rounded-md text-slate-900 bg-slate-300 border-2 hover:bg-slate-200 hover:border-slate-300"
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
