import EventDetail from "@/components/eventDetail";
import { events } from "@/constants/events";

export default function Page(){

  for (let i = 0; i < events.length; i++) {
    if (events[i].slug == "/events/2024/jen-sheerin-azure-open-ai-integrator-microsoft") {
      let event = events[i];
      return (<EventDetail event={event} />)
    }
  }

  return <div>No event found</div>;
}