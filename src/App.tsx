import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";

const Systems = lazy(() => import("./pages/Systems"));
const Outputs = lazy(() => import("./pages/Outputs"));
const Playground = lazy(() => import("./pages/Playground"));
const Note = lazy(() => import("./pages/Note"));
const NoteDigitalExperiences = lazy(() => import("./pages/NoteDigitalExperiences"));
const NoteAiPhilosophy = lazy(() => import("./pages/NoteAiPhilosophy"));
const CaseStudyYettel = lazy(() => import("./pages/CaseStudyYettel"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/systems/yettel" element={<CaseStudyYettel />} />
          <Route path="/outputs" element={<Outputs />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/playground/vibe-flow" element={<Note />} />
          <Route path="/playground/digital-experiences" element={<NoteDigitalExperiences />} />
          <Route path="/playground/ai-philosophy" element={<NoteAiPhilosophy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
