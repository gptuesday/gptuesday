import EventDetail from "@/components/eventDetail";
import { events } from "@/constants/events";



export default function JenPage(){
  return (<EventDetail event={events[1]} />)
}