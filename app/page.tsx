"use client";
import TailwindDemo from "./TailwindDemo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>content from page.tsx</h1>
      <p>
        this is tailwind css + next 13.1 on IPFS. Use Brave Browswer to view
      </p>
      <TailwindDemo />
      <Link href="/dashboard" style={{ color: "blue" }}>
        dashboard
      </Link>
    </div>
  );
}
