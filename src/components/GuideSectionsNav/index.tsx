import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import clsx from "clsx";
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";

import styles from "./styles.module.css";

function getFirstHref(item: PropSidebarItem): string | undefined {
  switch (item.type) {
    case "link":
      return item.href;
    case "category": {
      if (item.href) return item.href;
      for (const sub of item.items) {
        const h = getFirstHref(sub);
        if (h) return h;
      }
      return undefined;
    }
    default:
      return undefined;
  }
}

function getLabel(item: PropSidebarItem): string {
  switch (item.type) {
    case "link":
      return item.label;
    case "category":
      return item.label;
    default:
      return "";
  }
}

function isActivePath(pathname: string, href: string): boolean {
  if (!href) return false;
  const p = pathname.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";
  if (p === h) return true;
  return p.startsWith(h + "/");
}

export default function GuideSectionsNav(): React.ReactElement | null {
  const sidebar = useDocsSidebar();
  const location = useLocation();

  if (!sidebar?.items?.length) return null;

  const entries = sidebar.items
    .map((item) => {
      const href = getFirstHref(item);
      const label = getLabel(item);
      if (!href || !label) return null;
      return { href, label, key: `${label}-${href}` };
    })
    .filter(Boolean) as { href: string; label: string; key: string }[];

  if (!entries.length) return null;

  return (
    <nav className={styles.nav} aria-label="Seções do guia">
      <h2 className={styles.title}>Seções do guia</h2>
      <ul className={styles.list}>
        {entries.map(({ href, label, key }) => (
          <li key={key}>
            <Link
              to={href}
              className={clsx(
                styles.link,
                isActivePath(location.pathname, href) && styles.linkActive,
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
