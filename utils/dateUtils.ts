import { parse, isAfter, format } from 'date-fns';

export function isAfterToday(eventDate: string) {
  const today = new Date();
  const parsedEventDate = parse(eventDate, 'yyyy-MM-dd', new Date());

  return isAfter(parsedEventDate, today);
}
