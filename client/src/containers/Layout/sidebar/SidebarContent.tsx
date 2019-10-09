import React, { Component } from 'react';
import SidebarLink from './SidebarLink';

interface Props {
  onClick: Function
}

class SidebarContent extends Component<Props> {
  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Home" icon="home" route="/" onClick={this.hideSidebar} />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
