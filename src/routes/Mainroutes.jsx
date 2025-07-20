import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Activities = lazy(() => import("../pages/Activities"));
const Services = lazy(() => import("../pages/Services"));
const Programmes = lazy(() => import("../pages/Programmes"));
const Resources = lazy(() => import("../pages/Resources"));
const Engangements = lazy(() => import("../pages/Engangements"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Loader = lazy(()=>import("../components/Loader"))

function Mainroutes() {
  return (
    <Suspense fallback={<div className="text-center p-10">
      <Loader/>
    </div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/engangements" element={<Engangements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Mainroutes;
