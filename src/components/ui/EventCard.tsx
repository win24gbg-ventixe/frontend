import { Link } from 'react-router-dom'
import '../../styles/EventCard.css'
import type { Event } from '../../models/EventModel'
import { formatDateTime } from '../../utils/formatDateTime'

type Props = {
  event: Event
}

const EventCard = ({ event }: Props) => {
  return (
    <div className="event-card">
      <div className="event-card-header">
        <div className="event-card-header-top">
          <span className="event-card-badge-category">{event.category}</span>
          <span className="event-card-badge-status">
            <span className="status-dot" /> {event.status || 'Active'}</span>
        </div>
      </div>

      <div className="event-card-body">
        <p className="event-card-date">{formatDateTime(event.date)}</p>
        <h5 className="event-card-title">{event.title}</h5>
        <p className="event-card-location">{event.location}</p>


        <div className="event-card-footer mt-3">
          <Link to={`/events/${event.id}`} className="event-card-buy-button">
            Buy Tickets
          </Link>
          <span className="event-card-price">${event.price}</span>
        </div>
      </div>
    </div>
  )
}

export default EventCard