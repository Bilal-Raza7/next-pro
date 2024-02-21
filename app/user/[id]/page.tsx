// "use client";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: number;
  };
  phone: number;
  website: string;
}

const pramdata = async ({ params }: { params: { id: string } }) => {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/users/${params.id}`
  // );
  // const user: User[] = await res.json();

  return (
    <React.Fragment>
      {/* <div>user {params.id}</div> */}
      <div className="hero min-h-screen bg-base-200 min-w-fit">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="lg:max-w-lg md:mx-w-md sm:mx-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Shoes</h1>
            {/* <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
            <div className="flex justify-start pt-6 pb-3">
              <div className="badge p-3 bg-success mx-4">call</div>
              <p className="">0987654321</p>
            </div>
            <div className="flex justify-start">
              <div className="badge p-3 bg-secondary text-white mx-4 mb-2">
                Price
              </div>
              <p className="font-bold text-xl">$ 124.99</p>
            </div>
            <p className="mx-3">Rate me Now</p>
            <div className="rating rating-lg my-3">
              <input type="radio" name="rating-9" className="rating-hidden" />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2 bg-success"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2 bg-success"
                checked
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2 bg-success"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2 bg-success"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2 bg-success"
              />
            </div>
            <br />
            <button className="btn btn-neutral mx-2">Grab now</button>
            <Link href="/user">
              <button className="btn btn-neutral mx-2">
                Continue shopping
              </button>
            </Link>
            <Link href="/">
              <button className="btn btn-neutral mx-2">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default pramdata;
