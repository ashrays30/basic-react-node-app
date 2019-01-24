import React, { Component } from 'react';
import UserComponent from './cointainers/User';
import PostsComponent from './cointainers/Posts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
        constructor() {
                super();
        }

        render() {
                return (
                        <BrowserRouter>
                                <div className="container">
                                        <Switch>
                                                <Route exact path="/" component={UserComponent} />
                                                <Route path="/posts" component={PostsComponent} />
                                        </Switch>
                                </div>
                        </BrowserRouter>
                )
        }
}
export default App;
