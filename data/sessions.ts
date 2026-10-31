import type { Session } from "./types";

// Sunday, November 1, 2026 (Pacific Standard Time: daylight saving ends that morning), the tentative programme from the
// organisers. Everything is in the MPR. A session's end is when the next one starts; the check-in and the night market
// have no printed end, so the night market's `end` is its start (it carries on after the programme).
// `summary` is an optional second line under the title; the lectures use it for their number.
const at = (time: string) => `2026-11-01T${time}:00-08:00`;
const base = { day: 1 as const, venueId: "student-services-center", roomId: "mpr" };

export const sessions: Session[] = [
  { ...base, id: "checkin", title: "Check-in begins", start: at("11:00"), end: at("11:30") },
  { ...base, id: "welcome", title: "Welcome session + theme intro", start: at("11:30"), end: at("12:00") },
  { ...base, id: "lecture-1", title: "Nurturing Your Community in Service of Allah SWT", summary: "Lecture #1", start: at("12:00"), end: at("13:00") },
  { ...base, id: "dhuhr", title: "Dhuhr Salah", start: at("13:10"), end: at("13:30") },
  { ...base, id: "lunch", title: "Lunch", start: at("13:30"), end: at("14:00") },
  { ...base, id: "workshops", title: "Workshop rotations", start: at("14:00"), end: at("15:15") },
  { ...base, id: "asr", title: "Asr Salah", start: at("15:15"), end: at("15:45") },
  { ...base, id: "lecture-2", title: "Walking on the Earth with Humility", summary: "Lecture #2", start: at("15:45"), end: at("16:45") },
  { ...base, id: "announcements", title: "Announcements", start: at("16:45"), end: at("17:00") },
  { ...base, id: "maghrib", title: "Maghrib", start: at("17:00"), end: at("17:30") },
  { ...base, id: "lecture-3", title: "Practicing Moderation in Your Checkbook and Life", summary: "Lecture #3", start: at("17:30"), end: at("18:30") },
  { ...base, id: "closing", title: "Closing remarks", start: at("18:30"), end: at("18:40") },
  { ...base, id: "night-market", title: "Night market", start: at("18:40"), end: at("18:40") },
];
