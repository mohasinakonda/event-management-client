import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
// import auth from "../../firebase.config";
// import useToken from "../../hooks/useToken";
// import Spinner from "../Shared/Spinner";

const Register = () => {
  const [updateProfile, updating, err] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (updating || loading) {
    return <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />;
  }
  if (user) {
    navigate("/");
  }

  let errors;
  if (error) {
    errors = error?.message;
    return <div>{errors}</div>;
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const userInfo = { username: name, email };
    await updateProfile({ displayName: name });
    await createUserWithEmailAndPassword(email, password);

    fetch(`http://localhost:8000/user/`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    event.target.reset();
  };

  return (
    <div>
      <div className="w-96 mx-auto m-5">
        <div className="card bg-base-100 shadow-xl ">
          <form
            onSubmit={handleRegister}
            className=" grid grid-cols-1 gap-3 mx-auto  w-[100%] px-10"
          >
            <label htmlFor="name"> Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input  input-bordered input-primary  "
            />

            <label htmlFor="email"> Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="input  input-bordered input-primary  "
            />

            <label htmlFor="password"> Password</label>

            <input
              type="password"
              name="password"
              placeholder="password"
              className="input  input-bordered input-primary w-[100%]  "
            />
            <input type="submit" value="submit" className="btn btn-secondary" />
          </form>
          <p className="p-5">
            Already have an account ?{" "}
            <Link to="/login" className="text-primary ">
              Login here
            </Link>
          </p>
          <div className="divider">OR</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
