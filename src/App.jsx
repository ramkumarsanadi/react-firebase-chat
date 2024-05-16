import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/lists/List";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Details />
    </div>
  );
};

export default App;
