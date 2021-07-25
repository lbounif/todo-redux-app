
import './App.css';
import Header from './components/Header'
import AddTodo from  "./components/AddTodo"
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
