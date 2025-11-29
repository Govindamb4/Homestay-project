import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import PaymentPage from "./pages/PaymentPage";
import HomePage from "./pages/HomePage";
import RolesPage from "./pages/RolesPage";
import SearchPage from "./pages/SearchPage";
import AttractionsPage from "./pages/AttractionsPage";
import MapPage from "./pages/MapPage";
import LoginPage from "./pages/LoginPage";
import ListingDetails from "./pages/ListingDetails";
import HostProfile from "./pages/HostProfile";
import NotFound from "./pages/NotFound";
import LocalGuidesPage from "./pages/LocalGuidesPage";
import TouristPage from "./pages/TouristPage";
import AdminPage from "./pages/AdminPage";
import HostsPage from "./pages/Hostspage"; // ✅ NEW

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/host/:id" element={<HostProfile />} />
            <Route path="/local-guides" element={<LocalGuidesPage />} />
            <Route path="/tourist" element={<TouristPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/hosts" element={<HostsPage />} /> {/* ✅ NEW HOSTS PAGE */}
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
