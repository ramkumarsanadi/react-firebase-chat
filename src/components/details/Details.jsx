import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <p className="user-name">John Doe</p>
        <p className="user-about">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option photo-scroll">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photo-Item">
              <div className="photo-detail">
                <img
                  src="https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="download" src="./download.png" alt="" />
            </div>
            <div className="photo-Item">
              <div className="photo-detail">
                <img
                  src="https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="download" src="./download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className="logout">Log Out</button>
      </div>
    </div>
  );
};
export default Details;
