import NavBarAddGamesButton from "../molecules/NavBarAddGamesButton";
import NavBarGuideLink from "../molecules/NavBarGuideLink";
import NavBarLogo from "../molecules/NavBarLogo";

export default function NavBar() {
  return (
    <div className="w-16 flex flex-col items-center border-r border-gray-800">
      <NavBarLogo />
      <div className="pt-2">
        <NavBarAddGamesButton />
        <NavBarGuideLink />
      </div>
    </div>
  );
}
