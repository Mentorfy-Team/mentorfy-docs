/**
 * TOC mobile: mesmo conteúdo que o desktop (seções do guia), em bloco recolhível.
 */

import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useCollapsible, Collapsible } from "@docusaurus/theme-common";

import GuideSectionsNav from "@site/src/components/GuideSectionsNav";

import styles from "./styles.module.css";

export default function DocItemTOCMobile(): ReactNode {
  const { collapsed, toggleCollapsed } = useCollapsible({
    initialState: true,
  });

  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docTocMobile,
        styles.tocMobile,
        !collapsed && styles.tocMobileExpanded,
      )}
    >
      <button
        type="button"
        onClick={toggleCollapsed}
        className={clsx("clean-btn", styles.toggle, !collapsed && styles.toggleExpanded)}
        aria-expanded={!collapsed}
      >
        Seções do guia
      </button>
      <Collapsible lazy collapsed={collapsed} className={styles.collapsible}>
        <GuideSectionsNav />
      </Collapsible>
    </div>
  );
}
