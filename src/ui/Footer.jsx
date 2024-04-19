import { FaHeart } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="border-t bg-white py-4 text-center font-semibold text-marin-blue transition-all duration-300  md:bg-transparent">
      <p className=" flex items-center justify-center gap-2">
        Created By
        <FaHeart className=" text-red-600" />
        <a
          className=" underline"
          href="https://atef.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Mohamed Atef
        </a>
      </p>
    </footer>
  );
}
