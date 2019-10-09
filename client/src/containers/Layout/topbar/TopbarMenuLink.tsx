import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string,
  icon: string,
  path?: string
}

export default class TopbarMenuLinks extends PureComponent<Props> {
  render() {
    const { title, icon, path } = this.props;

    return (
      <Link className="topbar__link" to={path}>
        <span className={`topbar__link-icon lnr lnr-${icon}`} />
        <p className="topbar__link-title">{title}</p>
      </Link>
    );
  }
}
