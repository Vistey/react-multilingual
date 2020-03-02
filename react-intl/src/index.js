import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { injectIntl, IntlProvider, FormattedRelativeTime, FormattedMessage } from 'react-intl';

import language from './locales/default'

const PostDate = injectIntl(({date, intl}) => (
  <span title={intl.formatDate(date)}>
    <FormattedRelativeTime value={date} />
  </span>
));

const App = ({post}) => (
  <div>
    <h1>{post.title}</h1>
    <p>
      <PostDate date={post.date} />
    </p>
    <div>{post.body}</div>
    <hr/>
    <p>
      <FormattedMessage id="title" defaultMessage="fooaaaa" description="bar" />
    </p>
  </div>
);

ReactDOM.render(
  <IntlProvider locale={ navigator.language } messages={ language[navigator.language] } >
    <App
      post={{
        title: 'Hello, World!',
        date: new Date(),
        body: 'Amazing content.',
      }}
    />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
