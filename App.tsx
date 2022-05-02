import React from 'react';

import {TailwindProvider} from 'tailwind-rn';

import { MainRoot } from './src/roots/MainRoot';
import utilities from './tailwind.json';


export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <MainRoot />
    </TailwindProvider>
  );
}
