import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [emoji, setEmoji] = useState(false);
  const [input, setInput] = useState(null);

  const handleEmoji = (e) => {
    setInput((prev) => prev + e.emoji);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="users">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jhone Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="type a message..."
          value={input}
        />
        <div className="emoji">
          <img
            onClick={() => setEmoji((prev) => !prev)}
            src="./emoji.png"
            alt="emoji"
          />
          <div className="picker">
            <EmojiPicker open={emoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};
export default Chat;
