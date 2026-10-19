import Image from "next/image";
import { venues } from "@/data/venues";
import { directionsUrl, getVenue, mapEmbedUrl } from "@/lib/event-data";

/** The venue as Quiet Edition's postcard: a photo from last year's conference on a print, then the details. */
export function FindUs() {
  const venue = getVenue(venues, "student-services-center")!;
  const room = venue.rooms.find((r) => r.id === "mpr")!;
  const directions = directionsUrl(venue);
  return (
    <section id="find-us" className="qe-section grid overflow-x-clip justify-items-center gap-6 md:gap-8">
      <p data-anim="lines" className="qe-lead-sm">
        We gather on campus, a short walk from Geisel Library, in the {room.name} of the {venue.name}.
      </p>

      <div className="grid w-full max-w-[1100px] items-center gap-6 md:grid-cols-[1fr_1.15fr] md:gap-10">
        <div className="grid justify-items-center gap-5">
          <div data-scene="venue-postcard" className="qe-print w-full max-w-[340px]">
            <div className="plate">
              <Image src="/photos/venue.webp" alt="A speaker at the table on stage, between two flower arrangements, with the audience in front, beneath the Art of Adab slide" width={800} height={1200} sizes="(max-width: 768px) 85vw, 320px" className="block h-auto w-full" />
            </div>
          </div>
          <p data-anim="rise" className="qe-body">
            {venue.address ? `${venue.address}. ` : ""}
            {room.howToFind ?? "Follow the signs for the Student Services Center; the MPR is inside."}
          </p>
          <a className="qe-pill" href={directions} target="_blank" rel="noopener noreferrer">Directions</a>
        </div>

        <div data-scene="venue-map" className="qe-print w-full">
          <div className="plate">
            <iframe
              title={`Map of the ${venue.name}, UC San Diego`}
              src={mapEmbedUrl(venue)}
              className="block aspect-[16/10] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
