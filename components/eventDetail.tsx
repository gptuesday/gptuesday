import { EventType } from "@/types/typesIndex";
import Head from 'next/head';
import Image from 'next/image';
import DesktopNavigation from "./desktop-navigation";
import { cn } from "@/utils";

export default function EventDetail({event}: {event: EventType}){

  // Function to preprocess the event description
  function preprocessDescription (event: EventType) {
    const description = event.eventDescription;

    return description.split('\n').map(line => line.trim()).join('\n');
  };

  return(

    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      {/* <Head>
        <title>{event.speaker}: {event.title}</title>
        <meta name="description" content={`${event.speaker} - ${event.speakerTitle} - ${event.title}`} />
      </Head> */}


      <DesktopNavigation/>

      <main className="container mx-auto px-4 py-8 md:py-12">

        <section className="text-center mb-0">
          <div className='mb-4'>
            <h1 className="text-4xl font-bold mb-2">{event.speaker}</h1>
            <h2 className='text-2xl italic'>{event.speakerTitle}</h2>
          </div>

          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {event.title}
          </h2>
        </section>

        <section className="text-center mb-16">
          <a href={event.luma} target="_blank">
            <button className="bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold gradient-button w-button">
              Register Now
            </button>
          </a>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Date</h3>
            <p>{event.date}</p>
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

        <section className="mb-16 w-full">
          <h2 className="text-xl font-bold text-white mb-4">Event Description</h2>
          <p 
          className={`break-words whitespace-pre-wrap ${event.eventDescription == "TBD" ? cn("text-3xl font-bold mb-8 text-blue-500") : cn("text-lg text-purple-100")}`}
          style={event.eventDescription == 'TBD' ? { color: '#7B61FF' } : {}}
          >
              {preprocessDescription(event)}
          </p>
        </section>



        <section className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg p-8 mb-16">
          <Image src={event.image} alt={event.speaker} width={200} height={200} className="rounded-lg mb-8 md:mb-0 md:mr-8 border-2 border-purple-400" />
          <div>
            <h3 className="text-3xl font-bold mb-4">{event.speaker}</h3>
            <p className="text-gray-300 mb-4">
            {event.speakerTagline}
            </p>
          </div>
        </section>
      </main>
    </div>
  )

}