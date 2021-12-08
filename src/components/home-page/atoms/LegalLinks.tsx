import Link from "next/link";

export default function LegalLinks() {
  return (
    <div className="text-xs mt-2 text-gray-600">
      <Link href="/privacy">
        <a className="focus:underline hover:underline">Privacy</a>
      </Link>
      <span>{" - "}</span>
      <Link href="/terms">
        <a className="focus:underline hover:underline">Terms</a>
      </Link>
      <span>{" - "}</span>
      <Link href="/contact">
        <a className="focus:underline hover:underline">Contact</a>
      </Link>
    </div>
  );
}
