import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './components/Pages/Notes';
import Create from './components/Pages/Create';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Layout from '../src/components/Layout/layout'

const theme = createTheme({
  typography: {
    fontFamily: 'QuickSand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/'>
                <Notes />
              </Route>
              <Route path='/create'>
                <Create />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
  );
}

export default App;
