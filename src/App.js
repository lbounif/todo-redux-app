
import './App.css';
import Header from './components/Header'
import AddTodo from  './components/AddTodo'
import TodoList from './components/TodoList'
import Filters from  './components/Filters'

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;
