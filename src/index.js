// const Index = () => (
//   <div>
//     <p>Sample app using React and Next.js</p>
//   </div>
// );
//
// export default Index;

import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import {AppProvider} from '@shopify/polaris';

import App from './App';

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById('root'),
);