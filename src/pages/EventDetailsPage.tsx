import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Event } from '../models/EventModel'
import { usePageTitle } from '../hooks/usePageTitle'
import { formatDateTime } from '../utils/formatDateTime'
import BookingModal from '../components/ui/BookingModal'
import '../styles/EventDetailsPage.css'
import '../styles/EventCard.css'

const EventDetailsPage = () => {
  usePageTitle('Event Details')
  const { id } = useParams()
  const [event, setEvent] = useState<Event | null>(null)

  const [showModal, setShowModal] = useState(false)
  const isGuest = true

  const handleBooking = (data: any) => {
    console.log('Booking data:', data)
}

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`https://localhost:7169/api/events/${id}`)
      if (res.ok) {
        const data = await res.json()
        setEvent(data)
      }
    }

    fetchEvent()
  }, [id])

  if (!event) return <p>Loading...</p>

  return (
    <div className="event-details-wrapper">
      <div className="event-details-container">

        <div className="event-details-hero-header">
          <span className="event-card-badge-category">{event.category}</span>
          <span className="event-card-badge-status">
            <span className="status-dot"></span>
            {event.status || 'Active'}
          </span>
        </div>

        <div className="event-details-body">
          <div className="event-details-title-section d-flex justify-content-between align-items-start">
            <h2 className="event-details-title">{event.title}</h2>
            <p className="event-details-price">${event.price}</p>
          </div>

          <div className="event-details-meta">

            <p className='grey-text'>
              <i className="bi bi-calendar-event icon-margin" /> {formatDateTime(event.date)}
            </p>

            <p className='grey-text'><i className="bi bi-geo-alt icon-margin" /> {event.location}</p>
            
          </div>

          <hr className="event-details-divider" />

          <div className="event-details-description">
            <h5>About Event</h5>
            <p>{event.description}</p>
          </div>

          <button
            className="event-details-book-button"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>

          {showModal && event && (
            <BookingModal
              event={event}
              onClose={() => setShowModal(false)}
              onSubmit={handleBooking}
              isGuest={isGuest}
            />
          )}

        </div>
      </div>

        <div className="event-details-terms-box">
          <h5>Terms & Conditions</h5>
          <ul>
            <li>All attendees must present a valid ticket.</li>
            <li>No weapons, alcohol or fireworks allowed.</li>
            <li>Organizer may refuse entry for safety reasons.</li>
          </ul>
        </div>

    </div>
  )
}

export default EventDetailsPage