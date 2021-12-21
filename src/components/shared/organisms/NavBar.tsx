import NavBarAddGamesButton from "../molecules/NavBarAddGamesLink";
import NavBarContactLink from "../molecules/NavBarContactLink";
import NavBarDonateLink from "../molecules/NavBarDonateLink";
import NavBarGuideLink from "../molecules/NavBarGuideLink";
import NavBarLogo from "../molecules/NavBarLogo";

export default function NavBar() {
  return (
    <div className="w-16 flex flex-col items-center border-r border-gray-800">
      <NavBarLogo />
      <span className="text-green-500 text-sm font-semibold block -mt-1.5">
        BETA
      </span>
      <div className="pt-2">
        <NavBarAddGamesButton />
        <NavBarGuideLink />
        <NavBarDonateLink />
        <NavBarContactLink />
      </div>
    </div>
  );
}
