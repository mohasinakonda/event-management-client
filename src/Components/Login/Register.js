import React, { useEffect, useInsertionEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.config";

const Register = () => {
  const [updateProfile, updating, err] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

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
  if (sending) {
    return toast("verification send");
  }
  if (error) {
    const errors = error?.message;
    return toast.error(errors);
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const userInfo = { username: name, email };
    await updateProfile({ displayName: name });
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();

    fetch(`https://limitless-hollows-72000.herokuapp.com/user/`, {
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
