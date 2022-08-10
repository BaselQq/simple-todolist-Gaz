import { useCallback, useEffect, useReducer, useState } from 'react';
import Task from './Task';
import AddForm from './AddForm';
import Container from './Components/Container';
import reducer from './Store/reducer';

function App() {
  const [movies, setMovies] = useState([]);
	const [tasks, dispatch] = useReducer(reducer, [], () => [])
  
  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://firebaseLinkAsExample"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      
      console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  

	return (
		<Container>
			<AddForm onAdd={task => dispatch({ type: 'add', payload: task })} />
			{tasks.map(task => (
				<Task
					key={task.id}
					task={task}
					onDelete={() => dispatch({ type: 'delete', payload: task.id })}
					onDone={() => dispatch({ type: 'done', payload: task.id })}
					onEdit={() => dispatch({ type: 'edit', payload: task.id })}
					onEditDone={task => dispatch({ type: 'editDone', payload: task })}
					onEditCancel={id => dispatch({ type: 'editCancel', payload: id })}
				/>
        ))}
        <button onClick={fetchMoviesHandler}>Get data</button>
		</Container>
	)
}

export default App