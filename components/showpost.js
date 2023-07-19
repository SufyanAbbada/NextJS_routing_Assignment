import Image from "next/image";
import Link from "next/link";
import React from "react";
import jj from "@/public/jj.jpeg";

const ShowPost = (props) => {
  return (
    <div className="pb-20">
      <Link href={props.route} className="mb-5">
        <Image
          src={props.image}
          alt="Post Image"
          width={0}
          height={0}
          sizes="100vw"
          style={props.width === 100 ? { width: "100%", height: "auto" } : {}}
        />
      </Link>
      <div className={`flex ${props.spaces ? `mt-16` : ``}`}>
        <div className="w-1/2">
          <h2 className="text-4xl mb-5">{props.title}</h2>
          <h4>{props.date}</h4>
        </div>
        <div className="w-1/2">
          <p>{props.text}</p>
          <div className="flex items-center mt-5">
            <Image
              src={props.userImage}
              alt="User Image"
              width={500}
              height={500}
              className="w-12 h-12 mr-4"
            />
            <h3 className="text-xl font-bold">{props.userName}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
