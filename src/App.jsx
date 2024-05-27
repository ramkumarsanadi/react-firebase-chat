import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/lists/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { auth, firebaseConfig } from "./Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });

    return () => {
      unSub();
    };
  }, []);

  const user = false;
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
