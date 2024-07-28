import EventDetail from "@/components/eventDetail";
import { events } from "@/constants/events"

export function generateStaticParams(){


  let eventsMap = events.map((event, index) => (
    {"slug": event.slug}
  ))

  return eventsMap
}

export default function EventSlugDetail({
  params,
}: {
  params: {slug:string}
}){

  // Get the slug from events object
  try{
    let event;

    for (let i = 0; i<events.length; i++){
      
      // Now we use the slug to create the event detail page
      if (events[i]["slug"] == params.slug){
        event = events[i];
        return(
          <EventDetail
            event={event}
          />
        )
      }
    }
  }
  catch{
    console.log("Unable to get correct object")
  }

  return(

    <></>
  )
}