import { useRef, useState, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [emoji, setEmoji] = useState(false);
  const [input, setInput] = useState(null);

  const handleEmoji = (e) => {
    setInput((prev) => prev + e.emoji);
  };

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
      <div className="center">
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <img
              src="https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              maxime.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
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
