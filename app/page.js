import ShowPost from "@/components/showpost";
import Header from "./heading";
import dateFormat from "dateformat";

export default async function Home() {
  // const { allPosts } = await getData();
  // const [dynamicRouting, preview, helloWorld] = allPosts;

  return (
    <div className="m-16">
      <Header
        heading="Blog."
        helpingText="A statically generated blog example using Next.js and Markdown."
      />
      {/* <ShowPost
        image={dynamicRouting.image}
        width={dynamicRouting.width}
        route={"/posts/" + dynamicRouting.route}
        title={dynamicRouting.title}
        date={dateFormat(dynamicRouting.date, "mmmm dS, yyyy")}
        text={dynamicRouting.text}
        userImage={dynamicRouting.userImage}
        userName={dynamicRouting.userName}
        spaces={dynamicRouting.spaces}
      /> */}

      <Header heading="More Stories" />
      {/* <div className="flex gap-16">
        {[helloWorld, preview].map((post, key) => {
          return (
            <ShowPost
              key={key}
              image={post.image}
              width={post.width}
              route={"/posts/" + post.route}
              title={post.title}
              date={dateFormat(post.date, "mmmm dS, yyyy")}
              text={post.text}
              userImage={post.userImage}
              userName={post.userName}
              spaces={post.spaces}
            />
          );
        })}
      </div> */}
    </div>
  );
}

// export const getData = async () => {
//   const frontPagePosts = await fetch(
//     `${process.env.DEVELOPMENT_URL}/api/posts`,
//     {
//       cache: "no-store",
//     }
//   );
//   return frontPagePosts.json();
// };
