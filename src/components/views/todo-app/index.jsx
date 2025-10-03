import { useState } from "react"

function TodoApp() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTask] = useState([]);

    function addTask() {
        const tempTasks = [...tasks]
        tempTasks.push(inputValue)
        setTask(tempTasks)
        setInputValue('');
    }
    return (
       <div className="todo-container">
                
                {/* Todo Card/Box */}
                <div className="todo-card">
                    
                    {/* Heading */}
                    <h1 className="todo-heading">
                        React Todo App
                    </h1>
                    
                    {/* Input aur Button ka Container */}
                    <div className="input-group">
                        {/* Input Field */}
                        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}  placeholder="Add Task"className="task-input"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    addTask();  
                                }
                            }}
                        />
                        
                        {/* Button */}
                        <button  onClick={addTask} className="add-button" disabled={!inputValue.trim()}  >
                            Add 
                        </button>
                    </div>

                    {/* Task List Container */}
                    <div className="task-list">
                        {tasks.length === 0 && (
                            <p className="text-center text-gray-500 italic mt-4">
                                There is no task at the moment. Shall we start?
                            </p>
                        )}

                        {tasks.map((task , index) => (
                            // Har Task Item
                            <div key={index} className="task-item">
                                <span className="task-text">{task}</span>
                                
                                {/* Edit Icon (SVG) */}
                                <div className="edit-icon" title="Edit Task">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 17.892L7.5 18.75l.858-3.085 11.23-11.23z" 
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

    )
}

export default TodoApp