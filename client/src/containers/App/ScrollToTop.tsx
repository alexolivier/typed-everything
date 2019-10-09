import { PureComponent, ReactElement } from 'react';
import { BrowserRouterProps, RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps, BrowserRouterProps {
  children: ReactElement
}

class ScrollToTop extends PureComponent<Props> {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
