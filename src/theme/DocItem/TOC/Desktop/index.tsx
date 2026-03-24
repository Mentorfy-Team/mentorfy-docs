/**
 * TOC da página: substituído por navegação entre seções principais do guia
 * (Introdução, Vitrine, Integrações, etc.).
 */

import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";

import GuideSectionsNav from "@site/src/components/GuideSectionsNav";

import styles from "./styles.module.css";

export default function DocItemTOCDesktop(): ReactNode {
  return (
    <div
      className={clsx(
        "thin-scrollbar",
        ThemeClassNames.docs.docTocDesktop,
        styles.wrapper,
      )}
    >
      <GuideSectionsNav />
    </div>
  );
}
