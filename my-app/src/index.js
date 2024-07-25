import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter from "./components/app"


createRoot(document.querySelector('#root')).render(<Counter/>)
