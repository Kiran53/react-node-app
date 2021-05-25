import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/todos';
import { Footer } from './MyComponents/footer';
import { Addtodo } from './MyComponents/addtodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
function App() {
	
	const addtodo = (titl, desc) => {
		let sr
		{
			todos.length === 0 ? sr = 1 :
				sr = todos[todos.length - 1].srno + 1
		}
		const mytodo = {
			title: titl,
			description: desc,
			srno: sr
		}
		settodos([...todos, mytodo])



	}

	const onDelete = (todo) => {
		settodos(todos.filter((e) => {
			return e !== todo
		}))
		
	}

	const [todos, settodos] = useState([]);
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])
	useEffect(()=>{
		fetch("/api")
		.then((res)=>res.json())
		.then((data)=>{
			settodos(data)
		})
	},[])
	return (
		<>
			<Router>
				<Header title="todo-list" searchbar={true} />
				<Switch>
					<Route exact path="/" render={() => {
						return (
							<>
								<Addtodo addtodo={addtodo} />
								<Todos list={todos} onDelete={onDelete} />
							</>
						)
					}

					}>

					</Route>
					<Route exact path="/about">
						<About />

					</Route>
				</Switch>

				<Footer />
				
			</Router>
		</>
	);
}

export default App;
