import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withTracker } from '../../components/withTracker';
import Home from '../Home';
import Layout from '../Layout';
import MainWrapper from './MainWrapper';


const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <div>
          <Layout />
          <div className="container__wrap">
            <Route exact path="/" component={withTracker(Home)} />
          </div>
        </div>
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
