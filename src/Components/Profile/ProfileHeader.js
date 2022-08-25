// import imgbbUploader from "imgbb-uploader";
import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const ProfileHeader = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedCoverImg, setSelectedCoverImg] = useState();
  const [profilePic, setProfilePic] = useState("");
  const [coverPic, setCoverPic] = useState("");
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [user] = useAuthState(auth);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleCoverPic = (event) => {
    setSelectedCoverImg(event.target.files[0]);
  };
  // get userId////////////////////////
  useEffect(() => {
    fetch(`https://limitless-hollows-72000.herokuapp.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        data.map((info) => setUserInfo(info));
      });
  }, [user?.email]);
  //PROFILE PIC ////////////////////////////
  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    const imgbbKey = "1070b643f7a2b1991015cd196bc7ecaa";
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        fetch(
          `https://limitless-hollows-72000.herokuapp.com/user/${userInfo._id}`,
          {
            method: "put",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ profilePic: result.data.url }),
          }
        ).then((res) => res.json());
        setProfilePic(result.data.url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //COVER PIC ////////////////////////////////////////
  const coverPicHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedCoverImg);
    const imgbbKey = "1070b643f7a2b1991015cd196bc7ecaa";
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        fetch(
          `https://limitless-hollows-72000.herokuapp.com/user/${userInfo._id}`,
          {
            method: "put",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ coverPic: result.data.url }),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
        setCoverPic(result.data.url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div
        className="md:relative bg-gray-100 md:rounded-bl-lg md:rounded-br-lg
                    bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400"
        style={{ width: "940px", height: "348px" }}
      >
        <img
          src={coverPic || userInfo.coverPic}
          alt=""
          className=" absolute top-0"
          style={{ width: "940px", height: "348px" }}
        />
        <input
          type="file"
          name="coverPic"
          id="coverPic"
          hidden
          onChange={handleCoverPic}
        />
        <label
          htmlFor="coverPic"
          className="absolute top-72 bg-indigo-300 p-2 rounded right-2 "
        >
          cover pic
        </label>
        <button
          onClick={coverPicHandler}
          className="btn btn-sm btn-success absolute top-80  
             rounded right-8"
        >
          update
        </button>

        {/* // cover photo */}
        <div className="mb-5">
          {/* profile photo */}
          <img
            src={profilePic || userInfo.profilePic}
            className="rounded-full md:absolute top-44 left-0 inset-x-96 border-4 border-white w-40 h-40"
            style={{ width: "168px", height: "168px" }}
            alt=""
          />
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            onChange={changeHandler}
            hidden
          />
          <label
            htmlFor="profilePic"
            className="absolute top-72  
            bg-indigo-300 p-2 rounded left-28 "
          >
            Upload
          </label>
          <button
            onClick={handleSubmission}
            className="btn btn-sm btn-success absolute top-80  
             rounded left-28"
          >
            update
          </button>
        </div>
      </div>

      {/* // INFOS */}
      <div className="flex flex-col mt-5 mb-3.5">
        <h1 className="text-center font-bold text-3xl">{userInfo.username}</h1>

        <hr className="full flex self-center w-2/3 mt-2" />
      </div>
    </div>
  );
};

export default ProfileHeader;
