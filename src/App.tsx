/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Goals from './components/Goals';
import Security from './components/Security';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-finza-primary/20 selection:text-finza-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Goals />
        <Security />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
