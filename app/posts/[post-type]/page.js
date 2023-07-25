import Image from "next/image";
import React from "react";
import dateFormat from "dateformat";

async function Post({ params }) {
  const data = await getData(params["post-type"]);
  const post = data.singlePage[0];

  return (
    <div className="mb-36">
      <h1 className="text-7xl font-bold mb-12 text-left">{post.title}</h1>
      <div className="flex mb-6">
        <Image
          src={post.userImage}
          alt="User Image"
          width={500}
          height={500}
          className="w-12 h-12 mr-4 rounded-full"
        />
        <h3 className="text-xl font-bold">{post.userName}</h3>
      </div>

      <Image
        src={post.image}
        alt="Post Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="my-12"
      />
      <div className="text-lg mx-7">
        <h3 className="my-5">{dateFormat(post.date, "mmmm dS, yyyy")}</h3>
        <p>{post.text}</p>
        <p className="my-7">
          Qui sunt ea et ullamco tempor dolor tempor reprehenderit eu cupidatat
          veniam. Laboris anim dolore sit irure elit eu amet elit sit. Eiusmod
          enim sint irure ullamco. Cillum non officia sunt irure quis nisi elit
          non Lorem nostrud velit deserunt cupidatat ullamco. Commodo ullamco ad
          deserunt dolore do mollit culpa ipsum ex. Ex Lorem consectetur nulla
          veniam minim ipsum excepteur laboris ea. Laboris dolor labore eiusmod
          cupidatat mollit adipisicing est.
        </p>

        <h3 className="text-3xl my-10">Lorem Ipsum</h3>

        <p>
          Sunt culpa quis dolore tempor nisi culpa cillum incididunt laborum
          magna officia culpa. Sint nulla culpa occaecat sint occaecat veniam
          dolor Lorem laboris. Dolore dolore ea anim excepteur ea pariatur enim
          voluptate laboris. Nisi aliquip cillum irure labore eu. Nisi est amet
          incididunt in consequat fugiat est. Dolore dolor qui officia labore
          exercitation nostrud anim. Et ullamco sint adipisicing et pariatur ex
          reprehenderit anim tempor. Sint ea reprehenderit est ut ut. Dolor
          laborum tempor adipisicing tempor veniam dolor est id commodo in. Quis
          incididunt nisi id occaecat ullamco do velit ad ex ex voluptate.
        </p>
      </div>
    </div>
  );
}

export default Post;

export const getData = async (path) => {
  const pageData = await fetch(`http://localhost:3000/api/posts/${path}`, {
    cache: "no-store",
  });
  return pageData.json();
};
