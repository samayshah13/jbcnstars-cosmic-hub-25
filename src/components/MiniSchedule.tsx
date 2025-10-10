import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const MiniSchedule = () => {
  const events = [
    {
      time: "07:30",
      title: "Registration",
      group: "All Groups"
    },
    {
      time: "08:00",
      title: "Round 1 Begins",
      group: "All Levels"
    },
    {
      time: "09:45",
      title: "Round 2 Begins",
      group: "All Levels"
    },
    {
      time: "11:15",
      title: "Quiz Round",
      group: "Juniors"
    },
    {
      time: "13:00",
      title: "Quiz Rounds",
      group: "Inter & Senior"
    },
    {
      time: "15:00",
      title: "Prize Distribution",
      group: "All Groups"
    }
  ];
  return <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-deep-purple" />
          <h3 className="font-bold text-foreground text-lg sm:text-xl">Event Schedule</h3>
        </div>
        <Button 
          variant="outline" 
          className="self-start sm:self-auto text-deep-purple border-deep-purple hover:bg-deep-purple hover:text-white text-sm"
          onClick={() => window.location.href = '/events'}
        >
          View Full Schedule
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="space-y-2">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-3 glass rounded-lg hover:shadow-md hover:shadow-sky-purple/10 transition-all duration-300 group border border-primary/10"
          >
            {/* Time */}
            <div className="text-center min-w-[55px]">
              <div className="text-deep-purple font-bold text-base">{event.time}</div>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-primary/20"></div>

            {/* Event Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground group-hover:text-deep-purple transition-colors duration-300 text-sm truncate">
                {event.title}
              </h4>
              <p className="text-xs text-foreground-muted truncate">{event.group}</p>
            </div>

            {/* Indicator */}
            <div className="w-2 h-2 rounded-full bg-deep-purple flex-shrink-0"></div>
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-foreground-muted">
          📅 October 11th, 2025 | 📍 JBCN Parel, Mumbai
        </p>
      </div>
    </div>;
};
export default MiniSchedule;