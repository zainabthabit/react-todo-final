import TodoList from "./component/TodoList";
import todoData from './todoData'
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodoList todoData={ todoData } />
            </header>
        </div>
    );
}

export default App;
