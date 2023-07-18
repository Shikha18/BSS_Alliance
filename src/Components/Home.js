import React, {useEffect} from 'react';
import About from "./About/About";
import Header from "./Header/Header";
import Partners from "./Partners/Partners";
import Footer from "./Footer/Footer";
import PartnersList from "./PartnersList/PartnersList";
import Team from "./TeamDetails/Team";

function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <Header />
      <PartnersList />
      <About />
      <Partners />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
