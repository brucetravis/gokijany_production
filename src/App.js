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
import Members from "./pages/members/Members";
import CompanyProfile from "./pages/companyprofile/CompanyProfile";
import GreenProjects from "./pages/greenprojects/GreenProjects";
import NotFound from "./pages/notfound/NotFound";
import Adverts from "./pages/adverts/Adverts";
import Projectdetails from "./pages/projectsdetails/Projectsdetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"*"} element={<NotFound />} />
          <Route path={"/team"} element={<Team />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/impact"} element={<Impact />} />
          <Route path={"/adverts"} element={<Adverts />} />
          <Route path={"/careers"} element={<Careers />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/members/:id"} element={<Members />} />
          <Route path={"/payment/:itemId"} element={<Payment />} />
          <Route path={"/events/:eventId"} element={<Eventdetail />} />
          <Route path={"/greenprojects"} element={<GreenProjects />} />
          <Route path={'/companyprofile'} element={<CompanyProfile /> } />
          <Route path={'/storiesdetails/:storyId'} element={<StoriesDetails /> } />
          <Route path={'/projectsdetails/:projectId'} element={<Projectdetails /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
