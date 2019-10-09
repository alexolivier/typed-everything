import classNames from 'classnames';
import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import SidebarContent from './SidebarContent';

const Sidebar = ({
  changeMobileSidebarVisibility, sidebarShow, sidebarCollapse,
}) => {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--show': sidebarShow,
    'sidebar--collapse': sidebarCollapse,
  });

  return (
    <div className={sidebarClass}>
      <button type="button" className="sidebar__back" onClick={changeMobileSidebarVisibility} />
      <Scrollbar className="sidebar__scroll scroll">
        <div className="sidebar__wrapper sidebar__wrapper--desktop">
          <SidebarContent
            onClick={() => {}}
          />
        </div>
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          <SidebarContent
            onClick={changeMobileSidebarVisibility}
          />
        </div>
      </Scrollbar>
    </div>
  );
};

export default Sidebar;
