import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Eventdetail from "./pages/events/eventdetails/Eventdetail";
import Payment from "./pages/payment/Payment";
import Careers from "./pages/careers/Careers";
import Gallery from "./pages/gallery/Gallery"
import Team from "./pages/team/Team"
import Impact from "./pages/impact/Impact";
import StoriesDetails from "./pages/storiesdetails/StoriesDetails"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/impact"} element={<Impact />} />
          <Route path={"/careers"} element={<Careers />} />
          <Route path={"/team"} element={<Team />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={'/storiesdetails/:storyId'} element={<StoriesDetails /> } />
          <Route path={"/events/:eventId"} element={<Eventdetail />} />
          <Route path={"/payment/:itemId"} element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
