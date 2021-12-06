import Link from "next/link";

export default function NavBarGenericLinkContainer(props: {
  children: JSX.Element | JSX.Element[];
  href: string;
}) {
  return (
    <Link href={props.href}>
      <a className="mt-2 w-16 hover:bg-gray-800 py-2 flex flex-col items-center">
        {props.children}
      </a>
    </Link>
  );
}
