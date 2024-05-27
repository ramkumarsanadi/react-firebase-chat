import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { auth, db } from "../../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../Utils/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [isSignedIn, setIsSignedIn] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fromData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(fromData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imageURL = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imageURL,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    toast.success("logged in ");
    e.target.value = "";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fromData = new FormData(e.target);
    const { email, password } = Object.fromEntries(fromData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsSignedIn(true);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    {
      isSignedIn && toast.success("logged in");
    }
    e.target.reset();
  };

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="enter your mail" name="email" />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
          />
          <button disabled={loading}>{loading ? "loading" : "Log in"}</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload your avatar
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="enter your mail" name="email" />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
          />
          <button disabled={loading}>{loading ? "loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
