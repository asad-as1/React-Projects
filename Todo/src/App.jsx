import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h1>No Task Available</h1>

  if(mainTask.length > 0) {
    renderTask = mainTask.map((t,i) => {
      if(t.title != "" || t.desc != "") {
        return <li key={i} className='flex items-center justify-between'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button onClick={deleteHandler} className='bg-red-600 text-white px-4 py-2 rounded font-bold'>Remove</button>
      </li>
      }
       
    })
  }
  

 const submitHandler = (e) => {
   e.preventDefault()  
   setmainTask([...mainTask, {title, desc}])  
   setTitle("");
   setDesc("");
 }


  return (
   <>
   <h1 className='bg-black text-white
   p-5 text-5xl font-bold text-center'>My Todo List</h1>

   <form onSubmit={submitHandler}>

    <input type="text" className='text-2xl border-zinc-800
      border-4 m-8 px-4 py-2' placeholder= "Enter your Task here"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
      }}
    />

    <input type="text" className='text-2xl border-zinc-800
      border-4 m-8 px-4 py-2' placeholder= "Enter Description here"
      value={desc}
      onChange={(e) => {
        setDesc(e.target.value);
      }}
    />

    <button className='bg-black text-white px-4 py-2 text-2xl
    font-bold rounded m-5'>Add Task</button>
   </form>

   <hr />
   <div className='p-8 bg-slate-200'>
    <ul>{renderTask}</ul>
   </div>
   </>
  )
}

export default App
