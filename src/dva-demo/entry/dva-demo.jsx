import React from 'react';
import dva from 'dva';
import countModel from '../components/js/model/count';
import  App  from '../components/js/routes/count';

const app = dva();

app.model(countModel);

app.router(() => <App />);

app.start('#root');