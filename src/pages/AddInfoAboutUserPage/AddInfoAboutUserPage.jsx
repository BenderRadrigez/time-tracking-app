import React, { useEffect, useState } from "react";
import DefaultButton from "../../shared/defaultButton";
import CustomInput from "../../shared/castomInput";
import defaultUserIcon from "../../assets/images/defaultUserIcon.png";
import "./style.css";

export default function AddInfoAboutUserPage() {
  const [imageURL, setImageURL] = useState(defaultUserIcon);

  const fileReader = new FileReader();
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userBusiness, setUserBusiness] = useState("");
  const [userData, setUserData] = useState(null);
  const [isInvalidName, setIsInvalidName] = useState(false);

  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  useEffect(() => {
    if (userData != null && !isInvalidName) {
      console.log(userData);
    }
  }, [userData]);

  return (
    <div className="add-info-about-user">
      <h2 className="header-info-user-page">information about yourself</h2>
      <CustomInput
        onChange={(e) => {
          setUserName(e.target.value);
          setIsInvalidName(userName.length > 1 ?  false : true);
        }}
        value={userName}
        customStyle="input-field"
        placeholder={"name"}
        isInfoIcon
        infoText="take your name, please"
      />
      <CustomInput
        onChange={(e) => {
          setUserLastname(e.target.value);
        }}
        value={userLastname}
        customStyle="input-field"
        placeholder={"lastname"}
        isInfoIcon
        infoText="take your last name, please"
      />
      <CustomInput
        onChange={(e) => {
          setUserBusiness(e.target.value);
        }}
        value={userBusiness}
        customStyle="input-field"
        placeholder={"business"}
        isInfoIcon
        infoText="What will you use the app for? (work, daily schedule, study)"
      />
      <CustomInput
        customStyle="input-field"
        type={"file"}
        isFile
        onChange={(e) => {
          e.preventDefault();
          const file = e.target.files[0];
          setUserImage(file);
          fileReader.readAsDataURL(file);
        }}
      />
      <img className="image-info-user-page" src={imageURL} alt="" />
      <br />
      <DefaultButton
        text={"save"}
        castomStyle="save-btn"
        onClickFunc={() => {
            setUserData({
              userName: userName,
              userLastname: userLastname,
              userBusiness: userBusiness,
              userImage: userImage,
            });
        }}
      />
      {isInvalidName && <p style={{color: "red"}}>name has been more than 2 characters</p>}
    </div>
  );
}
