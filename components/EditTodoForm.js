"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTodoForm({ id, title, description }){
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });


            if(!res.ok) {
                throw new Error('failed to update todo...');
            }
            router.refresh();
            router.push('/');

        } catch (error) {
            console.log(error);

        }
    };

    return(
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                 className="border border-slate-500 px-8 py-2"
                 type="text" 
                 placeholder="Edit todo title"
                />

                <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                 className="border border-slate-500 px-8 py-2"
                 type="text"
                 placeholder="Edit todo Description"
                />

                <button
                 className="btn bg-slate-800 text-white font-bold py-3 px-6 w-fit"
                >
                    Update Todo
                </button>
            </form>
        </>
    )
}