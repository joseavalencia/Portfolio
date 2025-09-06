import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/Privacy-Policy';
import { TermsConditions } from './pages/Terms-Conditions';
import { Toaster } from './componenets/ui/toaster';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
