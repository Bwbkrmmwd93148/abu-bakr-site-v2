import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Navbar } from '@/components/layout/Navbar';
import AbuBakrChat from '@/components/chat/AbuBakrChat';

import Home from '@/pages/Home';
import About from '@/pages/About';
import TransformerOil from '@/pages/TransformerOil';
import TransformerOilResearch from '@/pages/TransformerOilResearch';
import TransformerOilTestingResearch from '@/pages/TransformerOilTestingResearch';
import AircraftResearch from '@/pages/AircraftResearch';
import AerodynamicsResearch from '@/pages/AerodynamicsResearch';
import JetEngineResearch from '@/pages/JetEngineResearch';
import AircraftLibrary from '@/pages/AircraftLibrary';
import AircraftArticle from '@/pages/AircraftArticle';
import AviationArticle from '@/pages/AviationArticle';
import AviationLibrary from '@/pages/AviationLibrary';
import AviationOil from '@/pages/AviationOil';
import Articles from '@/pages/Articles';
import Contact from '@/pages/Contact';
import Research from '@/pages/Research';
import NotFound from '@/pages/not-found';

import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/transformer-oil" component={TransformerOil} />
      <Route path="/research/aviation-library" component={AviationLibrary} />
      <Route path="/research/aviation-article/:path*" component={AviationArticle} />
      <Route path="/research/transformer-oil-basics" component={TransformerOilResearch} />
      <Route path="/research/transformer-oil-testing" component={TransformerOilTestingResearch} />
      <Route path="/research/aircraft-article/:file" component={AircraftArticle} />
      <Route path="/research/aircraft-library" component={AircraftLibrary} />
      <Route path="/research/jet-engines" component={JetEngineResearch} />
      <Route path="/research/aerodynamics" component={AerodynamicsResearch} />
      <Route path="/research/aircraft" component={AircraftResearch} />
      <Route path="/aviation-oil" component={AviationOil} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
      <Route path="/research" component={Research} />
<Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <div className="min-h-screen dark flex flex-col">
            <Navbar />

            <main className="flex-1">
              <Router />
            </main>

          </div>

          <AbuBakrChat />

        </WouterRouter>

        <Toaster />

      </TooltipProvider>
    </QueryClientProvider>
  );
}
