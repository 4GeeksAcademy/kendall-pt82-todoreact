import React, { useState } from "react";
import "../../styles/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

//create your first component
const Home = () => {
	const [input, setInput] = useState(""); 
	const [todos, setTodos] = useState([]);

	const addToDo = () => {
		const newTodo = input.trim();
		if (newTodo !== "") {
			setTodos([...todos, newTodo]); 
			setInput("");
		}
	};
	const removeToDo = (indexToRemove) => {
		setTodos(todos.filter((todoTask, index) => index !== indexToRemove));
	};


	return (
		<div className = "container d-flex align-items-center justify-content-center flex-column">
			<h1 className = "m-4">To Do List</h1>

			<div className = "card w-50">
				<div className = "card-body">

				{todos.length == 0 ? (
						<p className="text-muted m-2">No tasks, add a task</p>
					) : (
					<ul className = "mt-1 list-group">
						{todos.map((todo, index) => (
							<li className="justify-content-between d-flex list-group-item" key = {index}>
								{todo}{"  "}
									<button 
									className="btn" 
									onClick = {() => removeToDo(index)}> 
									<i class="fa-regular fa-trash-can"></i>
									</button>
							</li>
						))}
					</ul>)}
					
					
					<div className = "input-group mt-3">
						<input 
							type = "text" 
							className = "form-control" 
							placeholder = "Add to your chore list.." 
							value = { input }
							onChange = { (e) => setInput(e.target.value) }
  							onKeyDown={(e) => e.key === "Enter" && addToDo()}/>
						
						<button className="btn btn-success" onClick = { addToDo }> 
							 <i class="fa-regular fa-plus"></i>
						</button>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Home;