import DesktopNavigation from '@/components/desktop-navigation';
import Head from 'next/head';
import Image from 'next/image';

export default function SpeakerEvent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <Head>
        <title>GPTUesday - João Moura: Using agents to build an agent company</title>
        <meta name="description" content="Join João Moura for an inspiring talk on using AI agents to grow businesses and innovate." />
      </Head>


      <DesktopNavigation/>

      {/* <header className="container mx-auto px-4 py-6 block justify-between items-center">
        <Image src="/logo.png" alt="GPTUesday Logo" width={120} height={40} />
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Free Tickets
        </button>
      </header> */}

      <main className="container mx-auto px-4 py-12">

        <section className="text-center mb-0">
          <div className='mb-4'>
            <h1 className="text-4xl font-bold mb-2">João Moura</h1>
            <h2 className='text-2xl italic'>Founder, crewAI</h2>
          </div>

          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Using agents to build an agent company
          </h2>
        </section>

        <section className="text-center mb-16">
          <a href="https://lu.ma/7mpm9a38" target="_blank">
            <button className="bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold gradient-button w-button">
              Register Now
            </button>
          </a>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Date</h3>
            <p>July 9th</p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Time</h3>
            <p>6:30pm - 9:30pm</p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Location</h3>
            <p>The Hub at Office Logic</p>
          </div>
        </section>

        <section className="mb-16">
          <p className="text-lg mb-4">
            "This talk is about a simple idea: Everyone should be able to use AI to make cool stuff.
            When I started making crewAI, a framework to build AI Agents, I didn't know just how much it
            would change the way I work. This isn't just a chat about building AI Agents; it's a story about how
            these tools helped us grow our business and how they can help you too.
          </p>
          <p className="text-lg">
            I'll share our adventure with crewAI, showing how we used AI to solve problems, save time, and
            come up with new ideas. It's a journey of discovery and making things better with AI, showing
            everyone that they can use AI in their work and projects."
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg p-8 mb-16">
          <Image src="/img/speakers/joe-moura.jpg" alt="João Moura" width={200} height={200} className="rounded-lg mb-8 md:mb-0 md:mr-8" />
          <div>
            <h3 className="text-3xl font-bold mb-4">João Moura</h3>
            <p className="text-gray-300 mb-4">
              "Founder of crewAI / prev @clearbit (acc by @hubspot) In tech for 20 years,
              I love building things, programming and OpenSource."
            </p>
            <p className="font-semibold">João Moura, CEO</p>
          </div>
        </section>
        {/* <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Social Media</h3>
          <p className="mb-4">
            Watch our Youtube
          </p>
        </section> */}
      </main>

      {/* <footer className="bg-purple-900 text-white py-8 absolute bottom-0 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>GPTuesday</p>
        </div>
      </footer> */}
    </div>
  );
}