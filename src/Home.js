import React, {useEffect} from 'react';
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import PartnersList from "./Components/PartnersList/PartnersList";
import Team from "./Components/TeamDetails/Team";

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
