import type { Session } from "./types";

// Sunday, November 1, 2026, 11 AM check-in through the night market (Pacific Standard Time: daylight saving ends that morning).
// The night market runs "onward" in the programme; its end time is the event's 8 PM close.
const base = { day: 1 as const, venueId: "student-services-center", roomId: "mpr", description: "Placeholder description of the session." };

export const sessions: Session[] = [
  { ...base, id: "checkin", title: "Check-in Begins", summary: "Doors open and badge pick-up.", start: "2026-11-01T11:00:00-08:00", end: "2026-11-01T11:40:00-08:00" },
  { ...base, id: "welcome", title: "Welcome Session + Theme Intro", summary: "Welcome and the day's theme.", start: "2026-11-01T11:40:00-08:00", end: "2026-11-01T12:00:00-08:00" },
  { ...base, id: "lecture-1", title: "Lecture #1 (Imam Tabari)", summary: "Opening lecture with Imam Tabari.", start: "2026-11-01T12:10:00-08:00", end: "2026-11-01T13:10:00-08:00" },
  { ...base, id: "dhuhr", title: "Dhuhr Salah + Refreshments", summary: "Pray together and recharge.", start: "2026-11-01T13:20:00-08:00", end: "2026-11-01T13:45:00-08:00" },
  { ...base, id: "workshops", title: "Workshop Rotations w Shaykh Taha", summary: "Workshop rotations with Shaykh Taha.", start: "2026-11-01T13:45:00-08:00", end: "2026-11-01T15:00:00-08:00" },
  { ...base, id: "lunch-asr", title: "Lunch + Asr Salah", summary: "Eat together and pray Asr.", start: "2026-11-01T15:10:00-08:00", end: "2026-11-01T16:00:00-08:00" },
  { ...base, id: "lecture-2", title: "Lecture #2 (Mufti Shadman)", summary: "Lecture with Mufti Shadman.", start: "2026-11-01T16:00:00-08:00", end: "2026-11-01T17:00:00-08:00" },
  { ...base, id: "maghrib", title: "Maghrib", summary: "Pray Maghrib together.", start: "2026-11-01T17:00:00-08:00", end: "2026-11-01T17:20:00-08:00" },
  { ...base, id: "lecture-3", title: "Lecture #2 (Shaykh Bilal)", summary: "Closing lecture with Shaykh Bilal.", start: "2026-11-01T17:30:00-08:00", end: "2026-11-01T18:30:00-08:00" },
  { ...base, id: "night-market", title: "Night Market", summary: "Food, stalls and company into the night.", start: "2026-11-01T18:30:00-08:00", end: "2026-11-01T20:00:00-08:00" },
];
