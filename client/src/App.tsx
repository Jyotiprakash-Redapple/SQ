import React from 'react';
import Navigation from './components/navbar/Navigation';
import Landing from './components/landing/Landing';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import HowWeDoIt from './components/howWeDoIt/HowWeDoIt';
import Projects from './components/work/Work';
import Contact from './components/contact/Contact';

// import Navigation from "./components/navbar/Navigation";
// import Landing from "./components/landing/Landing";
// import WhatWeDo from "./components/whatWeDo/WhatWeDo";
// import HowWeDoIt from "./components/howWeDoIt/HowWeDoIt";
// import Projects from "./components/work/Work";
// import Contact from "./components/contact/Contact";

const App = (): JSX.Element => (
  <div className="App">
    <Navigation />
    <Landing />
    <WhatWeDo />
    <HowWeDoIt />
    <Projects />
    <Contact />
  </div>
);

export default App;
