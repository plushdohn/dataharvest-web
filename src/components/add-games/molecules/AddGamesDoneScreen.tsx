import DoneIcon from "../../shared/atoms/DoneIcon";
import Link from "next/link";

export default function AddGamesDoneScreen() {
  return (
    <div className="flex items-center">
      <DoneIcon colorClassOverride="text-green-500" sizeClassOverride="w-8" />
      <span className="ml-2 text-green-500 text-sm">
        Games added successfully. Click{" "}
        <Link href="/">
          <a className="font-semibold hover:underline focus:underline">here</a>
        </Link>{" "}
        to go back to the editor.
      </span>
    </div>
  );
}
