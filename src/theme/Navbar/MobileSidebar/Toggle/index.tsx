import React, { type ReactNode } from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import IconMenu from "@theme/Icon/Menu";

export default function MobileSidebarToggle(): ReactNode {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
        message: "Toggle navigation bar",
        description:
          "The ARIA label for hamburger menu button of mobile navigation",
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn flex flex-col gap-1 ml-1.5 mr-1.5 cursor-pointer"
      type="button"
    >
      <div className={"w-5 h-0.5 bg-white transition"} />
      <div className={"w-5 h-0.5 bg-white transition"} />
      <div className={"w-5 h-0.5 bg-white transition"} />
    </button>
  );
}
