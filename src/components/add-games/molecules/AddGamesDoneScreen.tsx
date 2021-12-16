import DoneIcon from "../../shared/atoms/DoneIcon";
import Link from "next/link";

export default function AddGamesDoneScreen() {
  return (
    <div className="flex items-center">
      <DoneIcon colorClassOverride="text-green-500" sizeClassOverride="w-8" />
      <span className="ml-2 text-green-500 text-sm">
        Games added successfully. You&apos;re being redirected to the editor...
      </span>
    </div>
  );
}
