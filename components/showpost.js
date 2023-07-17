import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowPost = (props) => {
  return (
    <div>
      <Link href={props.route}>
        <Image
          src={props.image}
          alt="Post Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <h2 className="">{props.title}</h2>
      <h4>{props.date}</h4>
      <p>{props.text}</p>
      <div>
        <Image
          src={props.userImage}
          alt="User Image"
          width={200}
          height={200}
        />
        <h3>{props.userName}</h3>
      </div>
    </div>
  );
};

export default ShowPost;
