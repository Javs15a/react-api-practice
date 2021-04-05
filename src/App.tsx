import React, { useState } from 'react';
import { makeStyles, Theme, Toolbar } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DrawerBar } from 'modules/shared/DrawerBar';
import { UserList } from 'modules/users/views/UserList';
import { UserForm } from 'modules/users/views/UserForm';
import UserContext from 'UserContext';
import { User } from 'modules/users/UserValues';
import { About } from 'modules/about/About';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {

  const classes = useStyle();
  const [user, setUser] = useState<User>({
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    phone: ''
  });

  const updateUser = (user: User) => {
    setUser(user);
  }

  const userContextValues = {
    user,
    updateUser
  }

  return (
    <UserContext.Provider value={userContextValues}>
      <Router>
        <div className={classes.root}>
          {/* AppBar & Drawer */}
          <DrawerBar />

          <main className={classes.content}>
            <Toolbar />
            <Switch>
              <Route exact path="/" render={props => <UserList />} />
              <Route exact path="/new" render={props => <UserForm action="Nuevo" />} />
              <Route exact path="/update" render={props => <UserForm action="Editar" />} />
              <Route exact path="/about" render={props => <About />} />
            </Switch>
          </main>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
