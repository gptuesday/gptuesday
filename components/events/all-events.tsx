import { events } from '@/constants/events';
import EventCard from '@/components/event-card';


export default function AllEvents() {

  return(
    <>
      {/* <div className="flex flex-wrap justify-center gap-14 m-auto w-full"> */}
      <div className="flex flex-wrap justify-center gap-y-10 md:gap-14 md:gap-y-14 m-auto w-full">
        {events.map((event,index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </>
  )
}