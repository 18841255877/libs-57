import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EchartsBasic } from '../.';
import {FC} from "react";

const App: FC = () => {
  return (
    <div>
      <EchartsBasic />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
