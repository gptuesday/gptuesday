import EventDetail from "@/components/eventDetail";
import { events } from "@/constants/events";

export default function Page(){

  for (let i = 0; i < events.length; i++) {
    if (events[i].slug == "/events/2024/unleashing-the-power-of-azure-ai-studio-transforming-ai-development-and-deployment-jen-sheerin-microsoft") {
      let event = events[i];
      return (<EventDetail event={event} />)
    }
  }

  return <div>No event found</div>;
}