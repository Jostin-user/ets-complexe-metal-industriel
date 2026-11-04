import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { siteData } from "./data/siteData";
import { getProjects } from "./utils/data";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Formation from "./pages/Formation";

function ServicePage() {
  const { slug } = useParams();
  const service = siteData.services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  return <ServiceDetail service={service} />;
}

export default function App() {
  const { settings } = siteData;
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServicePage />} />
        {getProjects().length > 0 && (
          <Route path="realisations" element={<Realisations />} />
        )}
        {settings.showTrainings && (
          <Route path="formation" element={<Formation />} />
        )}
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
