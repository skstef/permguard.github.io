import { classNames } from "@site/src/utils/classNames";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { INavLink } from "./Navigation";

export const NavLink: React.FC<INavLink> = ({
  name,
  href,
  sublinks,
  external,
}) => {
  const location = useLocation();

  return (
    <Popover as="li" className="relative">
      {({ close }) => (
        <>
          {external ? (
            <a
              title={name}
              href={href}
              className="font-semibold text-white hover:text-fuchsia-500 transition-colors text-[14px]"
            >
              {name}
            </a>
          ) : (
            <PopoverButton className="inline-flex group items-center gap-x-1 text-sm/6 font-semibold text-white outline-none">
              {({ open }) => (
                <>
                  {href ? (
                    <Link
                      title={name}
                      href={href}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={classNames(
                        "font-semibold group-hover:text-fuchsia-500 transition-colors",
                        location.pathname === href
                          ? "text-fuchsia-500"
                          : "text-white",
                      )}
                    >
                      {name}
                    </Link>
                  ) : (
                    <span
                      className={classNames(
                        "group-hover:text-fuchsia-500 transition-colors",
                        open ||
                          sublinks?.some(
                            ({ href }) => location.pathname === href,
                          )
                          ? "text-fuchsia-500"
                          : "text-white",
                      )}
                    >
                      {name}
                    </span>
                  )}
                  {sublinks ? (
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={classNames(
                        "size-5 transition-colors group-hover:text-fuchsia-500",
                        open ||
                          sublinks?.some(
                            ({ href }) => location.pathname === href,
                          )
                          ? "text-fuchsia-500"
                          : "text-white",
                      )}
                    />
                  ) : null}
                </>
              )}
            </PopoverButton>
          )}

          {sublinks ? (
            <PopoverPanel
              as="nav"
              transition
              className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div
                className={
                  "w-screen max-w-[600px] flex-auto overflow-hidden rounded-3xl bg-[#1e1f23] text-sm/6 shadow-lg ring-1 ring-zinc-900/5"
                }
              >
                <ul
                  className={classNames(
                    "p-4 grid gap-1 min-h-[276px]",
                    sublinks.length > 1 ? "grid-cols-2" : "grid-cols-1",
                  )}
                >
                  {sublinks
                    ?.filter((el) => !el.footerLink)
                    .map((item) => (
                      <li
                        key={item.name}
                        className={classNames(
                          "group relative flex gap-x-6 rounded-lg p-4 px-2 hover:bg-zinc-900/50 transition-colors",
                          item.wide ? "col-span-2" : null,
                          location.pathname === item.href
                            ? "bg-zinc-900/50"
                            : null,
                        )}
                      >
                        <div className="mt-1 flex size-14 flex-none items-center justify-center rounded-lg bg-zinc-800 group-hover:bg-zinc-800">
                          {item.icon && (
                            <item.icon
                              aria-hidden="true"
                              className="size-6 text-zinc-400 group-hover:text-white"
                            />
                          )}
                        </div>
                        <div>
                          {item.external ? (
                            <a
                              title={item.name}
                              href={item.href}
                              className="font-semibold text-white group-hover:text-fuchsia-500"
                              onClick={() => close()}
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          ) : (
                            <Link
                              title={item.name}
                              href={item.href}
                              className={classNames(
                                "font-semibold group-hover:text-fuchsia-500 transition-colors",
                                location.pathname === item.href
                                  ? "text-fuchsia-500"
                                  : "text-white",
                              )}
                              onClick={() => close()}
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          )}
                          <p className="mt-1 text-zinc-400">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
                {sublinks.some((el) => el.footerLink) ? (
                  <div className="grid divide-x divide-white/10 bg-zinc-700/50">
                    {sublinks
                      .filter((el) => el.footerLink)
                      .map((el) => (
                        <a
                          target="_blank"
                          key={el.name}
                          href={el.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white group hover:text-fuchsia-500 hover:bg-zinc-700/50"
                        >
                          <CalendarDaysIcon
                            aria-hidden="true"
                            className="size-5 flex-none text-zinc-500 group-hover:text-fuchsia-500"
                          />
                          {el.name}
                        </a>
                      ))}
                  </div>
                ) : null}
              </div>
            </PopoverPanel>
          ) : null}
        </>
      )}
    </Popover>
  );
};
