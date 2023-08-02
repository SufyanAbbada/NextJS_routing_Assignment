import ShowPost from "@/components/showpost";
import Header from "./heading";
import dateFormat from "dateformat";

export default async function Home() {
  // const { allPosts } = await getData();
  // const preview = allPosts[0];

  return (
    <div className="m-16">
      <Header
        heading="Blog."
        helpingText="A statically generated blog example using Next.js and Markdown."
      />
      {/* <ShowPost
        image={preview.image}
        width={preview.width}
        route={"/posts/" + preview.route}
        title={preview.title}
        date={dateFormat(preview.date, "mmmm dS, yyyy")}
        text={preview.text}
        userImage={preview.userImage}
        userName={preview.userName}
        spaces={preview.spaces}
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
