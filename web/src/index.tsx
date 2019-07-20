import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { Home } from './components';
import { appStore } from './store';

ReactDom.render(
  <Provider store={ appStore }>
    <Home />
  </Provider>,
  document.querySelector('#myApp'),
);
