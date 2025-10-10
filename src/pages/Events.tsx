import React from "react";
import Layout from "@/components/Layout";
import { Calendar, Clock, MapPin, Users, Trophy, Star, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RickRollEasterEgg from "@/components/RickRollEasterEgg";
import RegistrationClosedEasterEgg from "@/components/RegistrationClosedEasterEgg";

const Events = () => {
  const schedule = [
    {
      time: "07:30 - 08:00",
      event: "Registration",
      group: "All",
      venue: "Ground Floor"
    },
    {
      time: "08:00 - 09:30",
      event: "Team Round",
      group: "Juniors",
      venue: "Exam Room, 601, 602, 603"
    },
    {
      time: "08:00 - 09:30",
      event: "Individual Round",
      group: "Intermediates, Seniors",
      venue: "Theatre Cafe, Pac 1"
    },
    {
      time: "09:30 - 09:45",
      event: "Snack Break",
      group: "All",
      venue: "Juniors - 5th Floor | Inters + Seniors - 1st Floor Cafeteria"
    },
    {
      time: "09:45 - 11:00",
      event: "Individual Round",
      group: "Juniors",
      venue: "Theatre Cafe, Pac 1"
    },
    {
      time: "09:45 - 11:00",
      event: "Team Round",
      group: "Intermediates, Seniors",
      venue: "Exam Room, 601, 602, 603"
    },
    {
      time: "11:00 - 11:15",
      event: "Quiz Qualifying Team Announcement",
      group: "Juniors",
      venue: "-"
    },
    {
      time: "11:15 - 12:15",
      event: "Quiz Round",
      group: "Juniors",
      venue: "Theatre Cafe"
    },
    {
      time: "12:00 - 12:30",
      event: "Lunch Break",
      group: "Inters + Seniors",
      venue: "5th Floor"
    },
    {
      time: "12:15 - 12:45",
      event: "Lunch Break",
      group: "Juniors",
      venue: "1st Floor Cafeteria"
    },
    {
      time: "12:30 - 12:45",
      event: "Quiz Qualifying Team Announcement",
      group: "Inters + Seniors",
      venue: "Theatre Cafe"
    },
    {
      time: "13:00 - 14:00",
      event: "Quiz Round",
      group: "Intermediates",
      venue: "Theatre Cafe"
    },
    {
      time: "14:00 - 15:00",
      event: "Quiz Round",
      group: "Seniors",
      venue: "Theatre Cafe"
    },
    {
      time: "15:00 - 15:30",
      event: "Results and Prize Distribution",
      group: "All",
      venue: "Theatre Cafe"
    }
  ];

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
              Join us on October 11th, 2025, for an exhilarating display of mathematical prowess and problem-solving skills. 
              JBCNSTARS is a team competition open to students from grades 6-12.
            </p>
          </div>

          {/* Competition Day Schedule */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Competition Day Schedule</h2>
            <p className="text-center text-lg sm:text-xl text-muted-foreground mb-12">October 11th, 2025, Saturday | 07:30 AM to 3:30 PM | JBCN Parel, Mumbai</p>
            
            <div className="max-w-6xl mx-auto">
              <div className="glass rounded-xl overflow-hidden border border-primary/20">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-primary/20">
                      <TableHead className="text-primary font-bold text-base">Time</TableHead>
                      <TableHead className="text-primary font-bold text-base">Event</TableHead>
                      <TableHead className="text-primary font-bold text-base">Group</TableHead>
                      <TableHead className="text-primary font-bold text-base">Venue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedule.map((item, index) => (
                      <TableRow 
                        key={index}
                        className="border-primary/10 hover:bg-primary/5 transition-colors"
                      >
                        <TableCell className="font-semibold text-primary whitespace-nowrap">
                          {item.time}
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.event}
                        </TableCell>
                        <TableCell className="text-foreground-muted">
                          {item.group}
                        </TableCell>
                        <TableCell className="text-foreground-muted">
                          {item.venue}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Important Notes */}
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="glass p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Timing</h3>
                  </div>
                  <p className="text-sm text-foreground-muted">Please arrive 15 minutes before registration</p>
                </div>
                
                <div className="glass p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Venue</h3>
                  </div>
                  <p className="text-sm text-foreground-muted">JBCN International School, Parel, Mumbai</p>
                </div>
                
                <div className="glass p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Categories</h3>
                  </div>
                  <p className="text-sm text-foreground-muted">Junior (6-8) | Intermediate (9-10) | Senior (11-12)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="mt-24 text-center">
            <div className="card-premium max-w-3xl mx-auto p-12">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Join the Mathematical Elite?
              </h3>
              <p className="text-foreground-muted mb-8 text-xl leading-relaxed">
                Registration for JBCNSTARS 2025 is now open! Secure your place in this prestigious competition 
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