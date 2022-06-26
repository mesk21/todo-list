import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("");
        }
        else{
         props.addTodo(title,desc);
        settitle = "";
        setdesc = "";

        }
        
    
    }
  return (
    <div classNameName='container my-3'>
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlfor="title" className="form-label">Todo title</label>
    <input type="text" value={title} onChange={(e)=> {settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlfor="desc" className="form-label">Todo description</label>
    <input type="text" value={desc} onChange={(e)=> {setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success" >Add me</button>
</form>  
    </div>
  )
}
