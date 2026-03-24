import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();

  const regularItems = items.filter((item) => item.type !== 'html');
  const htmlItems = items.filter((item) => item.type === 'html');

  return (
    <>
      <ul className="menu__list">
        {regularItems.map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        ))}
      </ul>

      {htmlItems.length > 0 && (
        <div className="navbar-sidebar__cta-section">
          {htmlItems.map((item, i) => (
            <div key={i} dangerouslySetInnerHTML={{__html: item.value}} />
          ))}
        </div>
      )}
    </>
  );
}
