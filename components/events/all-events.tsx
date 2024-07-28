import { events } from '@/constants/events';
import EventCard from '@/components/event-card';


export default function AllEvents() {

  return(
    <>
      <div className="flex flex-wrap justify-center gap-14 m-auto">
        {events.map((event,index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </>
  )
}