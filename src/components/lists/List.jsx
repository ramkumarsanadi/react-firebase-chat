import { useState } from "react";
import ChatList from "./chatList/ChatList";
import "./list.css";
import Userinfo from "./userInfo/Userinfo";
import Search from "./search/Search";
const List = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="list">
      <Userinfo />
      <Search />
      <ChatList />
    </div>
  );
};
export default List;
