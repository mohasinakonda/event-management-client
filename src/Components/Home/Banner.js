import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen w-[90%] mt-2 mx-auto bg-base-200 shadow-xl">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src="https://i.ibb.co/qR6FRzr/10165.jpg"
          class="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Register your event</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
