import "./App.css";
import { Brand, Cta, Navbar } from "./componants";
import {
  Blog,
  Features,
  Header,
  Possibilitiy,
  WhatIsRamo,
  Footer,
} from "./containers";

function App() {
  return (
    <div className="App scroll-smooth text-white  font-sans sm:text-xs md:text-sm text-base">
      <header className="the-main-header">
        <Navbar />
        <Header />
      </header>
      <Brand />
      <WhatIsRamo />
      <Features />
      <Possibilitiy />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
