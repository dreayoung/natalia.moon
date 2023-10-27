import React from 'react';
import Article from './components/About/Article';
import Awards from './components/About/Awards';
import Shoutouts from './components/About/Shoutouts';

export default function About() {
  return (
    <main className="mt-10 lg:mt-0">
      <Shoutouts />
      <Article />
    </main>
  );
}
