import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../app/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Auth() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isTrueLogin, setIsTrueLogin] = useState(false);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const userRef = getDocs(collection(db, "users"));
    userRef
      .then((snapshots) => {
        if (!dataList.length)
          snapshots.forEach((doc) =>
            dataList.push({ id: doc.id, ...doc.data() })
          );
      })
      .catch((e) => {
        console.log("Error getting document:", e);
      });
  }, []);

  function loginBtn(){
    dataList.forEach((el)=>{
        if (el.login === userName && el.password === userPassword){
          localStorage.setItem('userInfo', JSON.stringify(el));
          return navigate('/home');
        }
    })
    setIsTrueLogin(true);
  }

  return (
    <div className="auth">
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setUserPassword(e.target.value)}
        value={userPassword}
      />

      <button
        className="loginBtn"
        onClick={() => {
          loginBtn()
        }}
      >
        Login
      </button>
      {isTrueLogin && (<p style={{color: "red"}}>invalid  username or password</p>)}
    </div>
  );
}
