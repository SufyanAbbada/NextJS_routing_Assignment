import ShowPost from "@/components/showpost";
import Header from "./heading";

export default function Home() {
  return (
    <div className="m-16">
      <Header
        heading="Blog."
        helpingText="A statically generated blog example using Next.js and Markdown."
      />
      <ShowPost
        image="/cover0.jpg"
        width={100}
        route="/dynamic-routing"
        title="Dynamic Routing and Static Generation"
        date="March 16, 2020"
        text="Consectetur mollit id est deserunt exercitation
        dolore deserunt mollit ex. Cupidatat dolor commodo ipsum incididunt cillum cillum voluptate ullamco sint in ut sunt velit. Consectetur mollit id est deserunt exercitation
        dolore deserunt mollit ex. Cupidatat dolor commodo ipsum incididunt cillum cillum voluptate ullamco sint in ut sunt velit."
        userImage="/jj.jpeg"
        userName="JJ Kasper"
        spaces={true}
      />
      <Header heading="More Stories" />
      <p></p>
    </div>
  );
}
