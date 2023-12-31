import React from "react";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div className="bottom-0 w-full bg-[#FAFAFAFA] border-t py-24">
      <div className="flex flex-col items-center space-y-10">
        <h1 className="text-4xl font-extrabold">
          Statically Generated with Next.js.
        </h1>
        <span className="border border-black">
          <Button className="font-bold bg-black text-lg text-white hover:bg-white hover:text-black px-10 py-3">
            <a href="https://nextjs.org/docs/basic-features/pages">
              Read Documentation
            </a>
          </Button>
        </span>
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
          className="font-bold"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
