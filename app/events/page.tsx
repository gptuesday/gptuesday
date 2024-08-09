import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DesktopNavigation from '@/components/desktop-navigation';
import AllEvents from '@/components/events/all-events';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <Head>
        <title>GPTuesday - Events</title>
        <meta name="description" content="Join us for exciting AI talks and workshops at GPTuesday events."/>
      </Head>

      <DesktopNavigation />

      <main className="mx-auto md:px-4 py-5 md:py-10 lg:py-10 w-full lg:max-w-[1800px]">
        <h1 className="text-5xl font-bold mb-12 text-center">Events</h1>

        <AllEvents />
      </main>
    </div>
  );
}
