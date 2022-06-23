import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="b1aeef85-bf8f-4886-afb7-c21e2463f1ac" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>
    , document.getElementById('root')); 