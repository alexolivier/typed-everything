import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge } from 'reactstrap';

interface Props {
  icon: string,
  newLink: Boolean,
  route: string,
  onClick: Function,
  title: string
}

class SidebarLink extends PureComponent<Props> {

  static defaultProps = {
    icon: '',
    newLink: false,
    route: '/',
    onClick: () => { },
  };

  render() {
    const { route, onClick, icon, title, newLink } = this.props
    return (
      <NavLink
        to={route}
        onClick={() => onClick()}
        activeClassName="sidebar__link-active"
      >
        <li className="sidebar__link">
          {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
          <p className="sidebar__link-title">
            {title}
            {newLink ? <Badge className="sidebar__link-badge"><span>New</span></Badge> : ''}
          </p>
        </li>
      </NavLink>
    )
  }
}

export default SidebarLink;
