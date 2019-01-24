import  express  from 'express';
import controller from './controllers/userController';
import bodyParser from 'body-parser';
import path from 'path'
import React from 'react'
import { getInitialState } from "../js/store/InitialState";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from '../js/reducers/AllReducers';
import App from '../js/app';

const app = express()
const port = 3000

const initialState = getInitialState();

app.use('/static', Express.static('static'))

app.use(handleRender)

function handleRender(req, res) {
    const logger = createLogger();
    const store = createStore(
        allReducers,
        initialState,
        applyMiddleware(thunk, logger)
    );
    const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      )
      const preloadedState = store.getState()
      res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
      `
  }


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.post('/user/login', controller.validateUser);

app.listen(port, () => console.log(`App listening on port ${port}!`))
