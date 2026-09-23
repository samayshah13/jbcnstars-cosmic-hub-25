import React from "react";
import Layout from "@/components/Layout";
import { Clock, MapPin, Users } from "lucide-react";
import { rounds } from "@/lib/syllabus";
import RickRollEasterEgg from "@/components/RickRollEasterEgg";
import RegistrationClosedEasterEgg from "@/components/RegistrationClosedEasterEgg";

const Events = () => {
  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Competition <span className="text-primary">Schedule</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-4xl mx-auto leading-relaxed px-4">
              Join us on October 19th, 2026, for an exhilarating display of mathematical prowess and problem-solving skills. 
              JBCNSTARS is a team competition open to students from Grades 1–12.
            </p>
          </div>

          <div className="mb-16 sm:mb-20 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Competition Day · 2026</h2>
            <p className="text-center text-lg text-muted-foreground mb-8">Monday, October 19, 2026 · 7:30 AM–4:00 PM · JBCN Parel, Mumbai</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass p-5 rounded-lg border border-primary/20"><Clock className="w-5 h-5 text-primary mb-2" /><h3 className="font-semibold">Time</h3><p className="text-foreground-muted">7:30 AM to 4:00 PM. Detailed round times will be announced.</p></div>
              <div className="glass p-5 rounded-lg border border-primary/20"><MapPin className="w-5 h-5 text-primary mb-2" /><h3 className="font-semibold">Venue</h3><p className="text-foreground-muted">JBCN International School, Parel, Mumbai</p></div>
              <div className="glass p-5 rounded-lg border border-primary/20"><Users className="w-5 h-5 text-primary mb-2" /><h3 className="font-semibold">Levels</h3><p className="text-foreground-muted">Sub Junior 1 (Grades 1–2), Sub Junior 2 (Grades 3–5), Junior (6–7), Intermediate (8–10), Senior (11–12)</p></div>
            </div>
            <div className="text-center mt-8">
              <p className="text-foreground-muted mb-4">The top 4 teams in each level qualify for the Math Quiz based on combined individual and team scores.</p>

            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
            {rounds.map((round) => (
              <div key={round.title} className="glass p-5 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-3">{round.title}</h3>
                <p className="text-foreground-muted text-sm mb-2">{round.subJunior}</p>
                <p className="text-foreground-muted text-sm">{round.otherLevels}</p>
              </div>
            ))}
          </div>

          {/* Registration CTA */}
          <div className="mt-24 text-center">
            <div className="card-premium max-w-3xl mx-auto p-12">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Join the Mathematical Elite?
              </h3>
              <p className="text-foreground-muted mb-8 text-xl leading-relaxed">
                Register your team of three by October 5, 2026 for JBCNSTARS 2026 
                and embark on an extraordinary mathematical journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <RegistrationClosedEasterEgg 
                  variant="default"
                  className="px-8 py-4 text-lg font-semibold"
                />
                <RickRollEasterEgg 
                  liveStreamUrl="https://youtube.com/live/vQbFbA2VoLA?feature=share"
                  className="px-8 py-4 text-lg font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;