import React, { useState } from "react"

const Main = () => {
  const [taskname, settaskname] = useState("")
  const [tasklist, settasklist] = useState([])
  function addTask() {
    settasklist([...tasklist, taskname])
  }
  const tasklistcontent = tasklist.map((task, index) => {
    return (
      <div>
        <p>{task}</p>
        <i class='far fa-trash-alt' onClick={() => deletetask(index)}></i>
      </div>
    )
  })

  function deletetask(index) {
    var duparray = [...tasklist]
    duparray.splice(index, 1)
    settasklist(duparray)
  }
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
          <h1>React Todo List</h1>
          <input
            type='text'
            placeholder='Enter Task'
            className='form-control'
            vlaue={taskname}
            onChange={(e) => {
              settaskname(e.target.value)
            }}
          />
          <button className='btn btn-success' onClick={addTask}>
            ADD
          </button>
          <br />
          {tasklistcontent}
        </div>
      </div>
    </div>
  )
}

export default Main
