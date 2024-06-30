import { events } from '@/constants/events';
import { EventType } from '@/types/typesIndex';
import EventCard from './event-card';

export default function UpcomingEvents() {

  return(
    <>
        <div className="flex flex-wrap justify-center gap-14">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
    </>
  )
}