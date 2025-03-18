import React from "react";

function Card({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card md:w-68 md:h-72 w-64 h-72 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="px-3 py-3 text-xs ">
            <h2 className="card-title ">
              {item.name}
              <div className="badge badge-secondary ">{item.category}</div>
            </h2>
            <p className="mt-3">{item.title}</p>
            <div className="card-actions justify-between mt-3 text-xs">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1   rounded-full border-[2px] hover:bg-blue-600 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
