import { events } from '@/constants/events';
import { EventType } from '@/types/typesIndex';
import Image from 'next/image';

export default function EventCard({ event }: { event: EventType }) {
  return (
    <div className="relative bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 w-11/12 md:w-[500px] border-rounded-xl pb-8 border-purple-600 border-4 hover:border-green-300">
        <a href={`${event.slug}`}>
          <img
            src={event.image}
            alt={event.speaker}
            className=" object-cover"
          />
          <div className="p-6">
            <p className="text-purple-200 text-3xl font-semibold">{event.speaker}</p>
            <p className="text-purple-200 mb-4 text-2xl italic">{event.speakerTitle}</p>
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text text-blue-400">{event.title}</h2>
            <p className="mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="mb-2">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="mb-4">
              <strong>Location:</strong> {event.location}
            </p>
            <span className="bg-purple-700 text-white px-4 py-2 rounded-full inline-block hover:bg-purple-600 transition-colors absolute bottom-2.5">
              Learn More
            </span>
          </div>
        </a>
    </div>
  );
}
