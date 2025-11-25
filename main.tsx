import React from 'react';
import { createRoot } from 'react-dom/client';
import BeamAnalyzer from './Analisis estructural';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BeamAnalyzer />
  </React.StrictMode>
);
