import Link from "next/link";

export default function PostLayout({ children }) {
  return (
    <div className="mx-24">
      <h3 className="text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">Blog.</Link>
      </h3>
      {children}
    </div>
  );
}
