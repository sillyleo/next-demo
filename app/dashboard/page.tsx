import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>content from dashboard.tsx</h1>
      <Link style={{ color: "blue" }} href="/">
        Home
      </Link>
    </div>
  );
}
