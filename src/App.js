import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import SpareParts from "./components/spareParts/Spare";

import Services from "./components/services/Services";
import ContactUsPage from "./components/contactus/ContactUsPage";
import CartPage from "./components/cart/CartPage";

import Paynow from "./components/payment/Paynow";
import favicon from "../src/assets/Images/logo.png";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RateUs from "./components/Rateus/RateUs";
import RatingsPage from "./components/RatingsPage/RatingsPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <HeroSection />
          <Footer />
        </>
      ),
    },
    {
      path: "/spareparts",
      element: (
        <>
          <Navbar />
          <SpareParts />
          <Footer />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Navbar />
          <Services />
          <Footer />
        </>
      ),
    },
    {
      path: "/contactus",
      element: (
        <>
          <Navbar />
          <ContactUsPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/cartpage",
      element: (
        <>
          <Navbar />
          <CartPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/payment",
      element: (
        <>
          <Navbar />
          <Paynow />
          <Footer />
        </>
      ),
    },
    {
      path: "/rateus",
      element: (
        <>
          <Navbar />
          <RateUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/ratings",
      element: (
        <>
          <Navbar />
          <RatingsPage />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Ro Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Ro Purifier Service" />
        <meta name="keywords" content="Ro,uv,tds" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href={favicon}></link>
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
