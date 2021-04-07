import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashbord from '../pages/Dashbord';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashbord} />
        <Route path="/repository" component={Repository} />
    </Switch>
);

export default Routes;
