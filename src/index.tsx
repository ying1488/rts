import ReactDOM from "react-dom/client";
import UserSearch from "./classes/UserSearch";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);


const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const App = () => {
  return (
    <div>
      <UserSearch users={users} />
    </div>
  );
};

root.render(<App />);