import React, { Suspense, Fragment, lazy, useEffect } from 'react';
// import Layout from './components/Layout/';
import { Route, Switch } from 'react-router-dom';
// import NProgress from 'nprogress';

import routes from './Routes/AllRoutes';
// import './custom.css';
// import './App.scss';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import LoadingScreen from './Shared/HelperMethods/LoadingScreen'


function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <>
        <WrappedComponent></WrappedComponent>
      </>
    }
  };
}

function RouteProgress(props) {
  // nprogressStyle();

  // NProgress.configure({
  //   speed: 500,
  //   showSpinner: true
  // });

  // useEffect(() => {
  //   NProgress.done();
  //   return () => {
  //     NProgress.start();
  //   };
  // }, []);

  return <Route {...props} />;
}


function App() {

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingScreen/>}>
        <Switch>
          {routes.map((route, i) => {
            const Component = route.component;

            return (
              <RouteProgress
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                    <>
                    {!route.ispublic ?
                      <PrivateRoute props={props} role={route.role} Component={withLayout(Component)} /> :
                      <PublicRoute props={props} Component={Component} />}
                    </>
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    </React.Fragment>
  );
  // }
}

export default App;
