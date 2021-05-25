import React, { useState } from 'react'
export const Addtodo = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or desc cannot be empty");
        }
        else {
            props.addtodo(title, desc);
            settitle("")
            setdesc("")
        }

    }
    return (
        <div className="container my-3">
            <h3>
                Add ToDO
            </h3>
            <form onSubmit={submit}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
