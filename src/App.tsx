import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LiveDemoArena } from './components/LiveDemoArena';
import { McpQuickstart } from './components/McpQuickstart';
import { ValueProps } from './components/ValueProps';
import { CodeSnippets } from './components/CodeSnippets';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06080f] text-[#f8fafc] flex flex-col font-sans selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <LiveDemoArena />
        <McpQuickstart />
        <ValueProps />
        <CodeSnippets />
      </main>
      <Footer />
    </div>
  );
};

export default App;
