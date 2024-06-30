import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DesktopNavigation from '@/components/desktop-navigation';
import UpcomingEvents from '@/components/upcoming-events';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <Head>
        <title>GPTuesday - Upcoming Events</title>
        <meta name="description" content="Join us for exciting AI talks and workshops at GPTuesday events." />
      </Head>

      <DesktopNavigation />

      <main className="container mx-auto px-4 py-5 md:py-10 lg:py-20">
        <h1 className="text-5xl font-bold mb-12 text-center">Upcoming Events</h1>

        <UpcomingEvents />
      </main>
    </div>
  );
}
