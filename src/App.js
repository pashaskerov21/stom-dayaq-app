
import AboutSection from "./components/AboutSection";
import FormSection from "./components/form/FormSection";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PartnerSection from "./components/PartnerSection";
import WorkerSection from "./components/WorkerSection";
import GallerySection from "./components/GallerySection";
import ReportSection from "./components/ReportSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [showScrollButton, setShowScrollButton] = useState(false)
  window.addEventListener('scroll', function () {
    if (this.scrollY > 300) {
      setShowScrollButton(true)
    } else {
      setShowScrollButton(false)
    }
  })

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {
        loading ? (
          <div className="loader">
            <div className="pattern"></div>
          </div>
        ) : (
          <>
            <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
            <button onClick={() => { window.scrollTo(0, 0) }} className={showScrollButton ? 'page-scroll-button' : 'page-scroll-button d-none'}><i className="fa-solid fa-arrow-up"></i></button>
            <Header />
            <main>
              <HomeSection />
              <AboutSection />
              <FormSection />
              <PartnerSection />
              <WorkerSection />
              <GallerySection />
              <ReportSection />
              <ContactSection />
            </main>
            <Footer />
          </>
        )
      }
    </>
  );
}

export default App;
