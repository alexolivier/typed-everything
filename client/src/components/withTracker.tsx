import React, { useEffect } from "react";
import ReactGA, { FieldsObject } from "react-ga";
import { RouteComponentProps } from "react-router-dom";

if (process.env.REACT_APP_GA) ReactGA.initialize(process.env.REACT_APP_GA);

export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {},
) => {
  const trackPage = (page: string) => {
    if (process.env.REACT_APP_GA) {
      ReactGA.set({ page, ...options });
      ReactGA.pageview(page);
    }
  };

  return (props: P) => {
    useEffect(() => {
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
}