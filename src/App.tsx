import React from 'react';
import { SideRails } from './components/SideRails';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LiveDemoArena } from './components/LiveDemoArena';
import { McpQuickstart } from './components/McpQuickstart';
import { ValueProps } from './components/ValueProps';
import { CodeSnippets } from './components/CodeSnippets';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="glacial-page min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SideRails />
      <Navbar />
      <HeroSection />
      <LiveDemoArena />
      <McpQuickstart />
      <ValueProps />
      <CodeSnippets />
      <Footer />
    </main>
  );
};

export default App;
