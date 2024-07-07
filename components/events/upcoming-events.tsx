import { events } from '@/constants/events';
import { EventType } from '@/types/typesIndex';
import EventCard from '@/components/event-card';
import { isAfterToday } from '@/utils/dateUtils';


export default function UpcomingEvents() {
  const futureEvents = events.filter(event => isAfterToday(event.formattedDate));

  return(
    <>
        <div className="flex flex-wrap justify-center gap-14">
          {futureEvents.map((event,index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
    </>
  )
}