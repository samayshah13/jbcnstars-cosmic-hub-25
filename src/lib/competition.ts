export const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfGBQEIc2P7WDQ7JKAoqSJjoN2A3eK-6EaWo1SEaM8J8n-ZPg/viewform?usp=header";
export const officialSyllabusUrl = "https://docs.google.com/document/d/1_tbI_G1CJAlMcKfbz5df8ofQ8suLIuhOBcE8rFBtitg/edit?tab=t.0";
export const competitionStart = new Date("2026-10-19T07:30:00+05:30");
export const registrationDeadline = new Date("2026-10-05T23:59:59+05:30");
export const isRegistrationOpen = () => new Date() <= registrationDeadline;
