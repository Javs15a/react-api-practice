import React from 'react';
import Dashboard from 'dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStyles } from 'assets/theme/dashboard/styles';
import { Container } from '@material-ui/core';
import { AdminCompraVenta } from 'modules/admin';
import { Transacciones } from 'modules/transac';
import { People } from 'modules/people';
import { Productos } from 'modules/products';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <div className={classes.root}>
          {/* AppBar & Drawer */}
          <Dashboard />

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Switch>
                <Route exact path="/" render={props => <AdminCompraVenta />} />
                <Route exact path="/transacciones" render={props => <Transacciones />} />
                <Route exact path="/personas" render={props => <People />} />
                <Route exact path="/productos" render={props => <Productos />} />
              </Switch>
            </Container>
          </main>
        </div>
      </Router>

    </div>
  );
}

export default App;
