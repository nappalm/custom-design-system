import React from 'react';
import ReactDOM from 'react-dom'
import { Location, Router } from '@reach/router';
import pagePreview from './previews/pagePreview';
import Home from './previews/home';

import Layout from './layout';
import './base.css';

type RenderPreviewProps = {
  path: any;
  preview: string;
}

const RenderPreview: React.FC<RenderPreviewProps> = ({ preview }) => {
  let Preview;

  try {
    Preview = require(`./previews/${preview}`).default;
  } catch {
    Preview = () => null;
  }

  return Preview;
}


ReactDOM.render(
  <Location>
    {({ location }:any) => (
      <Layout>
        <Router location={location} style={{ height: '100%' }}>
          <Home path="/" />
        { pagePreview.map((preview) => (
            <RenderPreview 
              preview={preview}
              key={preview}
              path={preview}
            />
          ))
        }
        </Router>
      </Layout>
    )}
  </Location>
  ,document.getElementById('root')
)