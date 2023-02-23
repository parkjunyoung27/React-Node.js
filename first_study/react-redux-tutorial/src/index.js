import ReactDom from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from "./modules";

const store = createStore(
  rootReducer, composeWithDevTools()
  //,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// 컴포넌트에서 store를 사용할 수 있도록 App 컴포넌트를 react-redux에서 제공하는 provider 컴포넌트로 감싸준다.

ReactDom.render(
  <Provider store={store}> 
    <App/>
  </Provider>,
  document.getElementById('root'),
);