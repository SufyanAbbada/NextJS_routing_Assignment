import React from "react";

function Header() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center p-2">
        <p>
          The source code for this blog is{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            className="underline"
          >
            available on Github
          </a>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Header;
