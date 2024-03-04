{/* Imorting the Link-component from Next.js to make the SVG clickable */}
import Link from "next/link";

{/* just like when creating the gitButton I used an online converter to make this SVG to a functional JSX */}
const InstagramButton = () => {
    return (
    <Link href="https://instagram.com/fitnessfeministen">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className="text-gray-300 hover:text-black"
    >
      <g>
        <path
        fill="currentColor"
        stroke="currentColor"
        d="M16 10.61c-3 0-5.39 2.437-5.39 5.39 0 3 2.39 5.39 5.39 5.39 2.953 0 5.39-2.39 5.39-5.39 0-2.953-2.437-5.39-5.39-5.39zm0 8.906A3.51 3.51 0 0112.484 16c0-1.922 1.547-3.469 3.516-3.469A3.461 3.461 0 0119.469 16c0 1.969-1.547 3.516-3.469 3.516zm6.844-9.094a1.26 1.26 0 00-1.266-1.266 1.26 1.26 0 00-1.265 1.266 1.26 1.26 0 001.265 1.265 1.26 1.26 0 001.266-1.265zm3.562 1.265C26.313 10 25.938 8.5 24.72 7.282 23.5 6.063 22 5.688 20.312 5.594c-1.734-.094-6.937-.094-8.671 0-1.688.093-3.141.468-4.407 1.687C6.016 8.5 5.641 10 5.547 11.688c-.094 1.734-.094 6.937 0 8.671.094 1.688.469 3.141 1.687 4.407 1.266 1.218 2.72 1.593 4.407 1.687 1.734.094 6.937.094 8.671 0 1.688-.094 3.188-.469 4.407-1.687 1.218-1.266 1.593-2.72 1.687-4.407.094-1.734.094-6.937 0-8.672zm-2.25 10.5c-.328.938-1.078 1.641-1.968 2.016-1.407.563-4.688.422-6.188.422-1.547 0-4.828.14-6.188-.422a3.554 3.554 0 01-2.015-2.015c-.563-1.36-.422-4.641-.422-6.188 0-1.5-.14-4.781.422-6.188a3.616 3.616 0 012.016-1.968c1.359-.563 4.64-.422 6.187-.422 1.5 0 4.781-.14 6.188.422.89.328 1.593 1.078 1.968 1.968.563 1.407.422 4.688.422 6.188 0 1.547.14 4.828-.422 6.188z"
        ></path>
      </g>
    </svg>
    </Link>
  );
}

export default InstagramButton;