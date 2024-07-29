import { EventType } from "@/types/typesIndex";
import Head from 'next/head';
import Image from 'next/image';
import DesktopNavigation from "./desktop-navigation";
import { cn } from "@/utils";
import { Card, CardContent, CardHeader } from "./ui/card";


export default function EventDetail({event}: {event: EventType}){

  // Function to preprocess the event description
  function preprocessDescription (event: EventType) {
    const description = event.eventDescription;

    return description.split('\n').map(line => line.trim()).join('\n');
  };

  if (!event) {
    return <div>No event found</div>;
  }


  return(

    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      {/* <Head>
        <title>{event.speaker}: {event.title}</title>
        <meta name="description" content={`${event.speaker} - ${event.speakerTitle} - ${event.title}`} />
      </Head> */}


      <DesktopNavigation/>

      <main className="container mx-auto px-4 py-8 md:py-12">

        <section className="text-center mb-0">

          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {event.title}
          </h2>          
        </section>

        <section className="my-8">
          <SpeakerBios event={event}/>
        </section>


        <section className="text-center mb-8 lg:mb-16">
          <a href={event.luma} target="_blank">
            <button className="bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold gradient-button w-button">
              Register Now
            </button>
          </a>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 lg:mb-16">
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

        <SpeakerTagLines event={event}/>
      </main>
    </div>
  )
}

function SpeakerTagLines({event}: {event: EventType}){

  return(
    <section className="mb-16 flex flex-col gap-y-8">
    {event.speaker.map((speaker, index) => (
      <SpeakerTagLine event={event} index={index} key={index}/>
      ))}
    </section>
  )
}

function SpeakerTagLine({event, index}: {event: EventType, index:number}){
  return(
    <div className="md:gap-y-5 items-center bg-white bg-opacity-10 rounded-lg flex text-left">
      <div className="md:pr-6">
        <Image src={event.image} alt={event.speaker[index]} width={200} height={200} className="rounded-lg mb-4 md:mb-0 md:mr-8 border-2 border-purple-400" />
      </div>
      <div className="">
        <h3 className="text-xl font-bold mb-4">{event.speaker[index]}</h3>
        <p className="text-gray-300 mb-4">
        {event.speakerTagline[index]}
        </p>
      </div> 
    </div>
  )
}

function SpeakerCard({event, index}: {event: EventType, index: number}){
  
 return(
  <Card className="w-auto bg-white bg-opacity-10 text-center p-0 pb-0 rounded-lg shadow-md w-11/12 md:w-[400px] py-2 text-white">
    <CardContent className="pb-0">
      <h3 className="text-xl font-semibold text-purple-300 py-0">{event.speaker[index]}</h3>
      <p className="text-sm text-gray-300">{event.speakerTitle[index]}</p>
    </CardContent>
  </Card>
 )
}

function SpeakerBios({event}: {event: EventType}){
  return(
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 m-auto">
      {event.speaker.map((speaker, index) => (
        <SpeakerCard event={event} index={index} key={index}/>
      ))}
    </div>
  )
}