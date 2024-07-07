import EventDetail from "@/components/eventDetail";
import { events } from "@/constants/events";

export default function Page(){
  let event = null;
  
  for (let i = 0; i < events.length; i++) {

    console.log(events[i].slug)

    if (events[i].slug == "/events/2024/jen-sheerin-azure-open-ai-integrator-microsoft") {
      event = events[i];
    }
  }


  return (<EventDetail event={event} />)
}