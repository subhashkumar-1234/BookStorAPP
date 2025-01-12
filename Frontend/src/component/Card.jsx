import React from "react";

function Card({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card bg-base-100  shadow-xl w-92  my-1 hover:scale-105 duration-300 ">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
