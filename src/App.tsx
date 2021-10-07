import React from 'react';
import { MuiThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { State } from './config/store';
import routes from './constants/routes';
import Title from './components/Title';
import Links from './components/Links';

export function getLightTheme(): Theme {
  return createMuiTheme();
}

const history = createBrowserHistory();

const App = (): JSX.Element => (
  <MuiThemeProvider theme={getLightTheme()}>

    <Router history={history}>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="center"
      >
        <Grid item xs>
          <Title />
        </Grid>
      </Grid>

      <Links />
    </Router>
  </MuiThemeProvider>
);

export interface AppProps {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: State): AppProps => ({
  isAuthenticated: state.applicationState.isAuthenticated,
} as unknown) as AppProps;

const mapDispatchToProps = (): AppProps => (({} as unknown) as AppProps);

export default connect(mapStateToProps, mapDispatchToProps)(App);
