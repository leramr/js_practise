import React from 'react';
import { createRoot } from 'react-dom/client';
import PaintingList from './painting.json'
import App from "./components/app"


createRoot(document.querySelector('#root')).render(<App/>)
