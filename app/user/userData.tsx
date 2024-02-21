"use client";
import Image from "next/image";
import Link from "next/link";

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     city: string;
//     zipcode: number;
//   };
//   phone: number;
//   website: string;
// }

const GetuserList = async () => {
  var Loading = true;

  // const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  // const user: User[] = await res.json();
  // console.log("res data starts here ", res);
  // console.log("res starts here ", res.data, "response");
  // console.log(error, "error from catch");

  // console.log("data starts here ", user);

  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // user = await res.json();

  return (
    <>
      <div className="p-5">
        <h1 className="text-center text-4xl font-bold">Users Page</h1>
        <Link href="/">
          <button className="btn btn-neutral">Go Back Home</button>
        </Link>
        {!Loading ? (
          <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div className="m-5 p-5">
                  <div className="skeleton w-52 h-32 my-4"></div>
                  <div className="skeleton h-2 w-32 my-4"></div>
                  <div className="skeleton h-2 w-48 my-4"></div>
                  <div className="skeleton h-2 w-48 my-4"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <>
                  <div className="card w-72 shadow-xl glass ">
                    <Link href={`/user/${index + 1}`}>
                      <figure>
                        <Image
                          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Nike Shoes</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-neutral">Buy Now</button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default GetuserList;
