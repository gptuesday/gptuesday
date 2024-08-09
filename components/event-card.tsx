import { EventType } from '@/types/typesIndex';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
export default function EventCard({ event }: { event: EventType }) {

  let speakerSection = event.speaker.map((speaker, index) => (
    <div key={index}>
      <SpeakerName>{speaker}</SpeakerName>
      <SpeakerTitle>{event.speakerTitle[index]}</SpeakerTitle>
    </div>
  ));
  
  return (
    <Link href={`/events/2024/${event.slug}`} target="_blank">
      <Card className='relative bg-white bg-opacity-10 rounded-lg shadow-lg border-rounded-xl border-purple-600 border-4 hover:border-green-300 m-0 p-0 m-auto w-11/12 lg:w-[500px]'>
          <CardHeader className='p-0'>
          <img
            src={event.image}
            alt={event.title}
            className=" object-cover"
          />      
        </CardHeader>
        <CardContent className='flex flex-col justify-between md:min-h-[300px] p-3 pb-0'>
          <div>
            {speakerSection}
          </div>
          <div className="mt-auto text-white">
            <p className="mb-2">
              <strong>Date: </strong>{event.date}
            </p>
            <p className="mb-2">
              <strong>Time: </strong>{event.time}
            </p>
            <p className="mb-4">
              <strong>Location: </strong>{event.location}
            </p>
          </div>
        </CardContent>
        <CardFooter className='abosolute bottom-0 w-full p-3 mb-0'>
          <Button className="bg-green-600 text-white w-full left-0 bottom-0 m-0 p-0">
              Learn More
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

function SpeakerName({children}: {children: string}){
  return (
    <p className="text-purple-200 text-xl font-semibold">{children}</p>
  )
}

function SpeakerTitle({children}: {children: string}){
  return(
    <p className="text-purple-200 mb-4 text-lg italic break-words whitespace-pre-wrap">{children}</p>
  )
}