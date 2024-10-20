import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex-col flex justify-center items-center">
      <p className="text-6xl">URL Not Found :(</p>
      <Link
        className="cursor-pointer border-x-sky-200 border bg-blue-200 rounded-2xl p-5 mt-10"
        to="/"
      >
        Go Back to Home Page
      </Link>
    </div>
  );
}
