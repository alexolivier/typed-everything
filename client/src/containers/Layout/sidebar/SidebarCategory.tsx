import classNames from 'classnames';
import React, { Component, ReactElement } from 'react';
import { Collapse } from 'reactstrap';

interface Props {
  title: string,
  icon?: string,
  isNew?: Boolean,
  children: ReactElement[],
}

interface State {
  collapse: boolean
}

export default class SidebarCategory extends Component<Props, State> {
  defaultProps = {
    icon: '',
    isNew: false,
  };

  state = {
    collapse: false,
  };

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    const {
      title, icon, isNew, children,
    } = this.props;
    const { collapse } = this.state;
    const categoryClass = classNames({
      'sidebar__category-wrap': true,
      'sidebar__category-wrap--open': collapse,
    });

    return (
      <div className={categoryClass}>
        <button type="button" className="sidebar__link sidebar__category" onClick={this.toggle}>
          {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
          <p className="sidebar__link-title">{title}
            {isNew && <span className="sidebar__category-new" />}
          </p>
          <span className="sidebar__category-icon lnr lnr-chevron-right" />
        </button>
        <Collapse isOpen={collapse} className="sidebar__submenu-wrap">
          <ul className="sidebar__submenu">
            <div>
              {children}
            </div>
          </ul>
        </Collapse>
      </div>
    );
  }
}
