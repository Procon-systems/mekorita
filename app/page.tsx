import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { ArrowRight, GitBranch, Layout, CheckCircle2, Users, FileText, Activity, Layers, ChevronDown } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-green-200 selection:text-green-900 text-[#1a2b2b] overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-xl border-b border-white/40">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3 text-[#1a2b2b]">
            <img src="/logoPng.png" alt="Mekorita Logo" className="h-10 w-auto object-contain" />
            <span className={`${playfair.className} text-2xl font-semibold tracking-tight`}>Mekorita</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1a2b2b]/70">
            <Link href="#about" className="hover:text-[#1a2b2b] transition-colors">About</Link>
            <Link href="#features" className="hover:text-[#1a2b2b] transition-colors">Features</Link>
            <Link href="#why" className="hover:text-[#1a2b2b] transition-colors">Why Mekorita</Link>
            <Link href="#faq" className="hover:text-[#1a2b2b] transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center gap-5 text-[#1a2b2b]">
            <Link href="/login" className="text-sm font-medium hover:text-[#1a2b2b]/70 transition-colors">
              Sign in
            </Link>
            <Link 
              href="/dashboard" 
              className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-[#1a2b2b] px-6 py-2 text-sm font-medium text-white shadow-lg shadow-[#1a2b2b]/10 transition-transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center py-20 border-b border-[#1a2b2b]/5">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10 relative">
            <h1 className={`${playfair.className} text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.9] tracking-tight text-[#111c1c] drop-shadow-sm`}>
              Room<br />to rise.
            </h1>
            
            <p className="mt-8 max-w-[42rem] leading-normal text-[#1a2b2b]/80 sm:text-xl sm:leading-8 font-medium">
              Mekorita brings your engineering team's projects, tasks, documentation, and asynchronous collaboration into one premium, lightning-fast platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-12">
              <Link 
                href="/dashboard" 
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#1a2b2b] px-8 text-base font-medium text-white shadow-xl shadow-[#1a2b2b]/10 transition-all hover:bg-[#1a2b2b]/90 hover:scale-105 gap-2"
              >
                Join Workspace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-md px-8 text-base font-medium text-[#1a2b2b] shadow-sm transition-all hover:bg-white/50 hover:scale-105 gap-2"
              >
                <Layout className="h-4 w-4" />
                Explore Platform
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 lg:py-32 relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-white/40 backdrop-blur-xl p-12 rounded-[3rem] border border-white/50 shadow-xl">
              <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-[#1a2b2b]`}>Built for high-performance teams.</h2>
              <div className="h-1 w-20 bg-green-500/80 mx-auto rounded-full"></div>
              <p className="text-lg md:text-xl text-[#1a2b2b]/80 leading-relaxed font-medium">
                "Mekorita" comes from the Igbo language and means <strong>Collaboration</strong>. 
                We believe that world-class software engineering is inherently a team sport. Mekorita is an enterprise-grade collaboration platform that aligns your product organization. It combines the best of issue tracking, technical documentation, and cross-functional workflows in one exceptionally beautiful interface.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use Mekorita Section */}
        <section id="why" className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className={`${playfair.className} text-4xl md:text-5xl text-[#1a2b2b] mb-6`}>Why choose Mekorita?</h2>
              <p className="text-lg text-[#1a2b2b]/80 max-w-2xl font-medium">Leave the generic, bloated dashboards behind. Experience a platform engineered for speed, focus, and scale.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-lg shadow-xl border border-white/50 hover:bg-white/70 transition-colors">
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-700">
                  <Activity className="h-7 w-7" />
                </div>
                <h3 className={`${playfair.className} text-3xl font-semibold mb-4`}>Unmatched Velocity</h3>
                <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">Designed to keep your engineers in the flow state. Manage complex epics, resolve PRs, and ship features without the friction of legacy tools.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-lg shadow-xl border border-white/50 hover:bg-white/70 transition-colors transform md:-translate-y-6">
                <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-700">
                  <Layout className="h-7 w-7" />
                </div>
                <h3 className={`${playfair.className} text-3xl font-semibold mb-4`}>Premium Aesthetics</h3>
                <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">A workspace you actually want to use. We prioritize visual excellence, ergonomic design, and a distraction-free environment.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-lg shadow-xl border border-white/50 hover:bg-white/70 transition-colors">
                <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-700">
                  <Layers className="h-7 w-7" />
                </div>
                <h3 className={`${playfair.className} text-3xl font-semibold mb-4`}>Unified Workflows</h3>
                <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">Centralize your operation. Track roadmap progress, write technical design docs, and monitor activity feeds without ever switching tabs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-8 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/50 shadow-2xl p-8 md:p-16">
            <h2 className={`${playfair.className} text-4xl md:text-6xl text-center text-[#1a2b2b] mb-16`}>Features that empower</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-green-500/10 p-3 rounded-xl text-green-700"><CheckCircle2 className="h-6 w-6" /></div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Kanban Excellence</h4>
                    <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">Fluid drag-and-drop boards to track Todo, In Progress, Review, and Done. Complete with priorities, custom labels, and rich filtering.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-blue-500/10 p-3 rounded-xl text-blue-700"><FileText className="h-6 w-6" /></div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Markdown Documentation</h4>
                    <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">A seamless, collaborative Markdown editor with live preview capabilities for all your team's technical specs and onboarding guides.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-purple-500/10 p-3 rounded-xl text-purple-700"><Users className="h-6 w-6" /></div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Real-time Activity Feeds</h4>
                    <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">Stay updated effortlessly. Monitor roadmap changes, PR statuses, and cross-functional team activity all in one centralized hub.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/50 backdrop-blur-md p-3">
                <div className="aspect-[4/3] rounded-2xl bg-white/40 border border-white/50 p-6 flex flex-col gap-4 shadow-inner">
                   {/* Abstract feature visual */}
                   <div className="flex gap-4 border-b border-[#1a2b2b]/10 pb-4">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="flex-1 flex gap-4">
                      <div className="w-1/3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/60 p-4 space-y-3">
                         <div className="h-4 w-1/2 bg-[#1a2b2b]/10 rounded"></div>
                         <div className="h-16 w-full bg-green-500/10 rounded border border-green-500/20"></div>
                         <div className="h-16 w-full bg-white rounded border border-white/60 shadow-sm"></div>
                      </div>
                      <div className="w-1/3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/60 p-4 space-y-3">
                         <div className="h-4 w-2/3 bg-[#1a2b2b]/10 rounded"></div>
                         <div className="h-16 w-full bg-blue-500/10 rounded border border-blue-500/20"></div>
                      </div>
                      <div className="w-1/3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/60 p-4 space-y-3">
                         <div className="h-4 w-1/3 bg-[#1a2b2b]/10 rounded"></div>
                         <div className="h-16 w-full bg-purple-500/10 rounded border border-purple-500/20"></div>
                         <div className="h-16 w-full bg-white rounded border border-white/60 shadow-sm"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Whom Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className={`${playfair.className} text-4xl md:text-5xl text-center mb-16 text-[#1a2b2b]`}>Who is Mekorita for?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="border border-[#1a2b2b]/10 p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-xl hover:bg-white/60 transition-colors">
                <h3 className={`${playfair.className} text-3xl mb-5 text-[#1a2b2b]`}>Product Engineers</h3>
                <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">Focus on shipping code, not navigating bloated UI. Enjoy a lightning-fast issue tracker built for developers who care about efficiency.</p>
              </div>
              <div className="border border-[#1a2b2b]/10 p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-xl hover:bg-white/60 transition-colors">
                <h3 className={`${playfair.className} text-3xl mb-5 text-[#1a2b2b]`}>Engineering Leaders</h3>
                <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">Gain complete visibility into your organization's velocity. Align your squads around clear goals and streamlined roadmaps.</p>
              </div>
              <div className="border border-[#1a2b2b]/10 p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-xl hover:bg-white/60 transition-colors">
                <h3 className={`${playfair.className} text-3xl mb-5 text-[#1a2b2b]`}>Product Managers</h3>
                <p className="text-[#1a2b2b]/80 leading-relaxed text-lg">Bridge the gap between strategy and execution. Keep technical requirements perfectly synced with development progress.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className={`${playfair.className} text-4xl md:text-6xl text-center text-[#1a2b2b] mb-12`}>Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <details className="group border border-white/50 rounded-3xl bg-white/50 backdrop-blur-xl shadow-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-8 text-[#1a2b2b] font-semibold hover:bg-white/40 transition-colors">
                  <h2 className="text-xl">How does Mekorita improve team velocity?</h2>
                  <ChevronDown className="h-6 w-6 shrink-0 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-8 pb-8 text-[#1a2b2b]/80 leading-relaxed text-lg">
                  By centralizing your issue tracking, technical specifications, and team communications, Mekorita drastically reduces the context switching that kills productivity. Our unified approach ensures developers spend more time writing code and less time searching for information across scattered tools.
                </div>
              </details>

              <details className="group border border-white/50 rounded-3xl bg-white/50 backdrop-blur-xl shadow-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-8 text-[#1a2b2b] font-semibold hover:bg-white/40 transition-colors">
                  <h2 className="text-xl">Is it suitable for enterprise organizations?</h2>
                  <ChevronDown className="h-6 w-6 shrink-0 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-8 pb-8 text-[#1a2b2b]/80 leading-relaxed text-lg">
                  Yes. Mekorita is built to scale. From startups to massive product organizations, our infrastructure handles thousands of concurrent users, massive issue boards, and extensive documentation trees without breaking a sweat.
                </div>
              </details>

              <details className="group border border-white/50 rounded-3xl bg-white/50 backdrop-blur-xl shadow-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-8 text-[#1a2b2b] font-semibold hover:bg-white/40 transition-colors">
                  <h2 className="text-xl">Can we integrate our existing toolchain?</h2>
                  <ChevronDown className="h-6 w-6 shrink-0 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-8 pb-8 text-[#1a2b2b]/80 leading-relaxed text-lg">
                  Absolutely. Mekorita offers robust API endpoints and native integrations with popular version control systems, CI/CD pipelines, and communication platforms to slot seamlessly into your existing workflows.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/40 bg-white/20 backdrop-blur-md py-12 md:py-16 mt-auto">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-[#1a2b2b] mb-4">
                <img src="/logoPng.png" alt="Mekorita Logo" className="h-8 w-auto object-contain" />
                <span className={`${playfair.className} text-2xl font-semibold`}>Mekorita</span>
              </div>
              <p className="text-[#1a2b2b]/70 max-w-sm mb-6 text-lg font-medium">
                The internal collaboration platform designed to elevate your engineering team's workflows and aesthetics.
              </p>
              <div className="flex items-center gap-4 text-[#1a2b2b]/50">
                 <Link href="https://github.com" className="hover:text-[#1a2b2b] transition-colors"><GitBranch className="h-6 w-6" /></Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#1a2b2b] mb-5 text-lg">Product</h3>
              <ul className="space-y-4 text-base text-[#1a2b2b]/70 font-medium">
                <li><Link href="#features" className="hover:text-[#1a2b2b] transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-[#1a2b2b] transition-colors">Integrations</Link></li>
                <li><Link href="#" className="hover:text-[#1a2b2b] transition-colors">Enterprise</Link></li>
                <li><Link href="#" className="hover:text-[#1a2b2b] transition-colors">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#1a2b2b] mb-5 text-lg">Company</h3>
              <ul className="space-y-4 text-base text-[#1a2b2b]/70 font-medium">
                <li><Link href="#" className="hover:text-[#1a2b2b] transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#1a2b2b] transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-[#1a2b2b] transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-[#1a2b2b] transition-colors">Contact Sales</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-[#1a2b2b]/60">
            <p>© {new Date().getFullYear()} Mekorita Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-[#1a2b2b] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#1a2b2b] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
