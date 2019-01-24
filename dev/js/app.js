import React, { Component } from 'react';
import UserComponent from './cointainers/User';
import PostsComponent from './cointainers/Posts';
import { HashRouter, Route } from 'react-router-dom';


class App extends Component {
        constructor() {
                super();
        }

        render() {
                return (
                        <HashRouter>
                                <div className="container">
                                        <Route path="/" component={UserComponent} />
                                        <Route path="/posts" component={PostsComponent} />
                                </div>
                        </HashRouter>
                )
        }
}
export default App;
