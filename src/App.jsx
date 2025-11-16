import Navbar from "./components/header/navbar/Navbar.jsx";
import Hero from "./components/header/hero/Hero.jsx";
import Prepare from "./components/prepare/Prepare.jsx";
import Job from "./components/job/Job.jsx";
import Join from "./components/join/Join.jsx";
import Story from "./components/story/Story.jsx";
import Get from "./components/get/Get.jsx";
import Explore from "./components/explore/Explore.jsx";
import Free from "./components/free/Free.jsx";
import Team from "./components/team/Team.jsx";
import FAQList from "./components/faq/FAQList.jsx";
import FooterBanner from "./components/footerBanner/FooterBanner.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  

  return (
      <>
          <header>
                <Navbar/>
              <Hero/>
          </header>
          <main>
              <Prepare/>
              <Job/>
              <Join/>
              <Story/>
              <Get/>
              <Explore/>
              <Free/>
              <Team/>
              <FAQList/>
              <FooterBanner/>
          </main>
          <footer>
              <Footer/>
          </footer>
      </>

  )
}

export default App
