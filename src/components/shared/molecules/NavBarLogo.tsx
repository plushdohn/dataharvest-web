import Link from "next/link";

export default function NavBarLogo() {
  return (
    <Link href="/">
      <a className="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 2000"
          className="text-green-500 fill-current w-8 rounded-sm"
        >
          <path d="M0,0V2000H411.94s-266.12-278.11-152.07-719.44c0,0,44.63-132.24,196.7-274.39S658.23,723.51,717.74,626s221.49-347.12,391.75-371.91,471.09,385.13,533.9,568.61,239.67,634.73,13.22,1021.52c-69.89,119.38-87.81,149.41-91.79,155.79H2000V0Z" />
          <polyline points="1059.96 1598.56 1376.73 1392.83 1542.39 1120.22 1240.63 1240.48" />
          <polyline points="940.04 1598.56 623.27 1392.83 457.61 1120.22 759.37 1240.48" />
        </svg>
      </a>
    </Link>
  );
}
