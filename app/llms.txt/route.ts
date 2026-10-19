import { speakers } from "@/data/speakers";
import { siteConfig } from "@/lib/site-config";

// /llms.txt: a plain-text summary of the site for AI assistants (the llms.txt convention), built from the same
// config and data as the page so it stays current.
export const dynamic = "force-static";

export function GET() {
  const c = siteConfig;
  const text = `# ${c.name} ${c.year}

> ${c.description}

## Event
- Name: ${c.name} ${c.year}
- Theme: ${c.theme}
- Date: ${c.dateText}
- Time: ${c.timeText} (Pacific Time)
- Place: Multipurpose Room (MPR), Student Services Center, UC San Diego, 9460 Russell Ln, La Jolla, CA 92093
- Presented by: Muslim Student Association (MSA) at UC San Diego (${c.websiteUrl})
${c.ticketUrl ? `- Tickets: ${c.ticketUrl}\n` : ""}- Website: ${c.siteUrl}/
- Instagram: ${c.instagramUrl}

## About
${c.themeDescription}

## Speakers
${speakers.map((s) => `- ${s.name}: ${s.role}`).join("\n")}

## Contact
${c.contacts.map((p) => `- ${p.name}: ${p.email}`).join("\n")}

## Pages
- [Home](${c.siteUrl}/): the event, schedule, speakers, venue, sponsors and FAQ
- [Gallery](${c.siteUrl}/gallery/): photos from the 2025 conference, The Art of Adab
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
