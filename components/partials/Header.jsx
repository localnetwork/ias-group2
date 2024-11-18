import Link from "next/link";

export default function Header() {
  const menuLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/page2",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <header className="mix-blend-difference fixed z-[100] py-[15px] top-0 left-0 w-full">
      <div className="container">
        <div className="flex justify-between">
          <div className="logo">
            <Link href="/">Logo</Link>
          </div>
          <nav>
            <ul className="flex gap-[15px]">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url}>{link?.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
