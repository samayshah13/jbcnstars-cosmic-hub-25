import React from "react"
import Layout from "@/components/Layout"
import { CheckCircle, AlertCircle, Clock, Users, BookOpen, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { officialSyllabusUrl, registrationUrl } from "@/lib/competition"
import { Button } from "@/components/ui/button"

const Rules = () => {
  const generalRules = [
    "Open to students from Grades 1 to 12 from different schools",
    "This is a team competition - participants must compete in teams of 3 members",
    "No calculators allowed. All electronic devices are prohibited during competition",
    "Competition takes place on Monday, October 19, 2026, from 7:30 AM to 4:00 PM",
    "Venue: JBCN Parel, Mumbai",
    "Registration fee: INR 1500 per team (inclusive of breakfast and lunch)",
    "Registration deadline: October 5, 2026",
    "Participants must bring valid student ID and registration confirmation",
    "Late arrivals may be disqualified at the organizers' discretion"
  ]

  const competitionFormat = [
    {
      title: "Individual Round",
      description: "Each participant solves grade-appropriate questions",
      duration: "See official 2026 round details",
      questions: "See the official 2026 syllabus for question and scoring details",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Team Round", 
      description: "Teams of three collaborate to solve problems",
      duration: "See official 2026 round details",
      questions: "See the official 2026 syllabus for question and scoring details",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Math Quiz",
      description: "Qualifying teams compete in the quiz round",
      duration: "See official 2026 round details",
      questions: "Math Star trophy for winners",
      icon: <Trophy className="w-6 h-6" />
    }
  ]

  const gradeLevels = [
    {
      level: "Sub Junior Level 1",
      grades: "Grades 1 & 2",
      topics: "See the official 2026 syllabus for this level.",
      difficulty: "Grade-appropriate mathematical reasoning and problem-solving"
    },
    {
      level: "Sub Junior Level 2",
      grades: "Grades 3, 4 & 5",
      topics: "See the official 2026 syllabus for this level.",
      difficulty: "Grade-appropriate mathematical reasoning and problem-solving"
    },
    {
      level: "Junior Level",
      grades: "Grades 6 & 7",
      topics: "Logical Thinking, Number pattern, Figure Pattern, Guess on 3-digit, 4 digit numbers by given number properties, Speed, distance & time Problem, ratio and percentages, basic geometry",
      difficulty: "Questions designed to motivate learners to think logically and challenge their mind with intriguing math problems"
    },
    {
      level: "Intermediate Level", 
      grades: "Grades 8, 9 & 10",
      topics: "Logical Thinking problems, Arithmetic, Number theory, Pattern, Algebra, Geometry, Trigonometry, Statistics and Probability",
      difficulty: "Questions designed to motivate learners to think logically and challenge their mind with intriguing math problems"
    },
    {
      level: "Senior Level",
      grades: "Grades 11 & 12", 
      topics: "Arithmetic, Number theory, Pattern, Algebra, shapes and measures, Geometry, Trigonometry, Statistics and Probability",
      difficulty: "Questions designed to motivate learners to think logically and challenge their mind with intriguing math problems"
    }
  ]

  return (
    <Layout>
      <div className="py-20 grid-bg">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rules & <span className="text-primary">Guidelines</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Everything you need to know about participating in JBCN Stars competition. 
              Please read carefully to ensure a smooth experience.
            </p>
          </div>

          {/* General Rules */}
          <div className="mb-16">
            <Card className="bg-card border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>General Rules</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {generalRules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground-muted">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competition Format */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Competition <span className="text-primary">Format</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {competitionFormat.map((format, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {format.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{format.title}</h3>
                    <p className="text-foreground-muted mb-4">{format.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{format.duration}</span>
                      </div>
                      <p className="text-xs text-foreground-muted">{format.questions}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Grade Levels */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Grade <span className="text-primary">Levels</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {gradeLevels.map((grade, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2">{grade.level}</h3>
                      <p className="text-primary font-semibold">{grade.grades}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Topics Covered:</h4>
                        <p className="text-foreground-muted text-sm">{grade.topics}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Difficulty:</h4>
                        <p className="text-foreground-muted text-sm">{grade.difficulty}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

           <div className="text-center mb-16">
             <p className="text-foreground-muted mb-4">The official 2026 document has the complete syllabus and round details for every level.</p>
             <Button variant="outline" onClick={() => window.open(officialSyllabusUrl, "_blank", "noopener,noreferrer")}>View 2026 Syllabus & Rounds</Button>
           </div>

           {/* Detailed Guidelines */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Detailed <span className="text-primary">Guidelines</span>
            </h2>
            
            <Card className="bg-card border-card-border">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="registration">
                    <AccordionTrigger className="text-lg font-semibold">
                      Registration Process
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="text-foreground-muted">
                        Registration is open to students from Grades 1–12 from different schools. Students must register 
                        in teams of exactly 3 members. Registration fee is INR 1500 per team (inclusive of breakfast and lunch). 
                        Registration deadline is October 5, 2026.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground-muted">
                        <li>Form teams of exactly 3 members from same grade level</li>
                        <li><a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Complete the 2026 registration form</a></li>
                        <li>Pay registration fee of INR 1500 per team</li>
                        <li>Register by October 5, 2026</li>
                        <li>Submit signed consent form from parents</li>
                        <li>Receive confirmation email with event details</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="preparation">
                    <AccordionTrigger className="text-lg font-semibold">
                      Preparation Guidelines
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="text-foreground-muted">
                        Prepare thoroughly using our resources and past papers. Focus on problem-solving 
                        techniques and time management skills.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground-muted">
                        <li>Practice with past JBCN Stars papers</li>
                        <li>Review mathematical concepts for your grade level</li>
                        <li>Work on speed and accuracy</li>
                        <li>Participate in practice sessions</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="day-of-event">
                    <AccordionTrigger className="text-lg font-semibold">
                      Day of Event
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="text-foreground-muted">
                        Registration begins at 7:30 AM. Bring necessary materials 
                        and identification.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground-muted">
                        <li>Valid student ID and registration confirmation</li>
                        <li>Writing materials (pens, pencils, erasers)</li>
                        <li>No calculators allowed</li>
                        <li>Water bottle and light snacks</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="scoring">
                    <AccordionTrigger className="text-lg font-semibold">
                      Scoring System
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="text-foreground-muted">
                        Scoring is based on accuracy, with different weightage for different rounds.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground-muted">
                        <li>See the official 2026 syllabus and round details for scoring and quiz qualification.</li>
                        <li>Awards: Top three individual scorers at each level receive plaques; top three teams at each level receive plaques and certificates for each member; quiz winners receive the Math Star trophy. Every participant receives a participation certificate.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <div className="text-center">
            <Card className="inline-block bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Important Notice</h3>
                </div>
                <p className="text-foreground-muted text-sm max-w-2xl">
                  All rules and guidelines are subject to change. Participants will be notified 
                  of any updates via email and the official website. Please check regularly for updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Rules