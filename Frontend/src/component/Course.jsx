import React from "react";
import List from "../../public/list.json";
import Card from "./Card";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  md:px-20 px-4 mt-20 md:mt-24 ">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {List.map((item) => (
            <Card className="mx-4" item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
