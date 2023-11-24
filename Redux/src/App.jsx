import { AddTodo } from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="w-1/2 mx-auto">
      <AddTodo />
      <Todos />
    </div>
  );
};
export default App;
