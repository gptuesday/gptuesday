import EventDetail from "@/components/eventDetail";
import { events } from "@/constants/events";

export default function Page(){
  return (<EventDetail event={events[2]} />)
}