import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBarGenericLinkContainer(props: {
  children: JSX.Element | JSX.Element[];
  href: string;
}) {
  const { pathname } = useRouter();

  return (
    <Link href={props.href}>
      <a
        className={`mt-2 w-16 hover:bg-gray-800 py-2 flex flex-col items-center ${
          pathname === props.href ? "text-green-500" : "text-gray-500"
        }`}
      >
        {props.children}
      </a>
    </Link>
  );
}
