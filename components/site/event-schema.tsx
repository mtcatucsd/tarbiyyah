import { speakers } from "@/data/speakers";
import { venues } from "@/data/venues";
import { siteConfig } from "@/lib/site-config";

// The event as schema.org JSON-LD, the structured data Google reads for event results and AI assistants read
// for facts. Built from the same config and data the page shows, so it can't drift from them.
export function EventSchema() {
  const venue = venues.find((v) => v.id === "student-services-center")!;
  const url = `${siteConfig.siteUrl}/`;
  const organizer = {
    "@type": "Organization",
    name: "Muslim Student Association at UC San Diego",
    alternateName: "MSA at UC San Diego",
    url: siteConfig.websiteUrl,
    sameAs: [siteConfig.instagramUrl],
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        "@id": `${url}#event`,
        name: `${siteConfig.name} ${siteConfig.year}: ${siteConfig.theme}`,
        description: siteConfig.description,
        url,
        image: [`${siteConfig.siteUrl}/opengraph-image.png`],
        startDate: siteConfig.eventDate,
        endDate: siteConfig.eventEnd,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: `Multipurpose Room (MPR), ${venue.name}, UC San Diego`,
          address: { "@type": "PostalAddress", streetAddress: "9460 Russell Ln", addressLocality: "La Jolla", addressRegion: "CA", postalCode: "92093", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: venue.coordinates[1], longitude: venue.coordinates[0] },
        },
        organizer,
        performer: speakers.map((s) => ({ "@type": "Person", name: s.name, jobTitle: s.role })),
        ...(siteConfig.ticketUrl ? { offers: { "@type": "Offer", url: siteConfig.ticketUrl, availability: "https://schema.org/InStock" } } : {}),
      },
      { "@type": "WebSite", "@id": `${url}#website`, name: `${siteConfig.name} ${siteConfig.year}`, url, publisher: organizer },
    ],
  };
  // "<" is escaped so no field can close the script tag early.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
