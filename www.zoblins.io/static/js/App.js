import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Static from './Minter';
import StaticMinter from './static-minter';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/hxq3p6">
          <StaticMinter />
        </Route>

        <Route path="/">
          <Static />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
