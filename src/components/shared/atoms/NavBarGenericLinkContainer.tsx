import Link from "next/link";

export default function NavBarGenericLinkContainer(props: {
  children: JSX.Element | JSX.Element[];
  href: string;
}) {
  return (
    <Link href={props.href}>
      <a className="py-2 mt-2 w-16 hover:bg-gray-800 rounded flex flex-col items-center">
        {props.children}
      </a>
    </Link>
  );
}
