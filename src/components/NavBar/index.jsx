import React from "react";

import "./NavBar.css";
// "About", "Projects", "Contact", "CV"
const links = [
  {
    linkId: 1,
    linkName: "About",
    linkRoute: "/about",
  },
  {
    linkId: 2,
    linkName: "Projects",
    linkRoute: "/projects",
  },
  {
    linkId: 3,
    linkName: "Contact",
    linkRoute: "/contact",
  },
  {
    linkId: 4,
    linkName: "CV",
    linkRoute: "/cv",
  },
];

export default function NavBar() {
  return (
    <nav>
      <ul>
        {links.map(({ linkId, linkName, linkRoute }) => {
          return (
            <li key={linkId}>
              <a href={linkRoute}>{linkName}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
