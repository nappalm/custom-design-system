/* eslint-disable react/no-unused-prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Location, Router } from '@reach/router';
import pagePreview from './previews/pagePreview';
import Home from './previews/home';

import Header from './previews/__header';
import Layout from './layout';
import './base.css';

type RenderPreviewProps = {
  path: any;
  preview: string;
}

const styledPreview = {
  backgroundColor: 'white',
  borderRadius: 5,
  padding: 10,
  height: 'calc(100vh - 12rem)',
  overflowY: 'scroll',
  color: '#0a0908',
};
const PreviewComponent: React.FC<RenderPreviewProps> = ({ preview }) => {
  let Preview;

  try {
    Preview = require(`./previews/${preview}`).default;
  } catch (error) {
    Preview = () => null;
  }

  return (
    <div>
      <Header name={preview} />
      <div style={styledPreview}>
        <h1>
          Examples
        </h1>
        <Preview />
      </div>
    </div>
  );
};

const Routing = () => (
  <Location>
    {({ location }:any) => (
      <Layout>
        <Router location={location} style={{ height: '100%' }}>
          <Home path="/" />
          { pagePreview.map((preview) => (
            <PreviewComponent
              preview={preview}
              key={preview}
              path={preview}
            />
          ))}
        </Router>
      </Layout>
    )}
  </Location>
);

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root'),
);
