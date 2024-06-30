import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DesktopNavigation from '@/components/desktop-navigation';

interface Event {
  id: number;
  speaker: string;
  speakerTitle: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  slug: string;
}

// Mock data for multiple events
const events: Event[] = [
  {
    id: 1,
    speaker: "João Moura",
    speakerTitle: "Founder, crewAI",
    title: "Using agents to build an agent company",
    date: "July 9th",
    time: "6:30pm - 9:30pm",
    location: "The Hub at Office Logic",
    image: "/img/speakers/joe-moura.jpg",
    slug: "/events/2024/using-agents-to-build-an-agent-company-joao-moura-crewai",
  },
  // Add more event objects here
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <Head>
        <title>GPTuesday - Upcoming Events</title>
        <meta name="description" content="Join us for exciting AI talks and workshops at GPTuesday events." />
      </Head>

      <DesktopNavigation />

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center">Upcoming Events</h1>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <a href={`${event.slug}`}>
          <Image
            src={event.image}
            alt={event.speaker}
            width={400}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
            <p className="text-purple-200 text-2xl">{event.speaker}</p>
            <p className="text-purple-200 mb-4 text-xl">{event.speakerTitle}</p>
            <p className="mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="mb-2">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="mb-4">
              <strong>Location:</strong> {event.location}
            </p>
            <span className="bg-purple-700 text-white px-4 py-2 rounded-full inline-block hover:bg-purple-600 transition-colors">
              Learn More
            </span>
          </div>
        </a>
    </div>
  );
}
