import { useEffect, useState } from 'react';
import EventCard from '../components/ui/EventCard';
import type { Event } from '../models/EventModel';
import '../styles/EventsPage.css';
import { usePageTitle } from '../hooks/usePageTitle'
{/*
import SearchBar from '../components/ui/SearchBar';
*/}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  usePageTitle('Events')

  const getEvents = async () => {
    const res = await fetch('https://ecutb-laine-eventservice-c6caedbwabb6faam.swedencentral-01.azurewebsites.net/api/events');
    if (res.ok) {
      const data = await res.json();
      setEvents(data);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="events-container-outer">
      <div className="events-container-header">

        {/*
        <SearchBar />
        */}
        
        </div>
      <div className="events-container-inner">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;