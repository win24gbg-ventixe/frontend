import '../../styles/BookingModal.css';
import { useState } from 'react';
import type { Event } from '../../models/EventModel';
import { formatDateTime } from '../../utils/formatDateTime';

type BookingModalProps = {
  event: Event;
  onClose: () => void;
  onSubmit: (data: any) => void;
  isGuest: boolean;
}


const BookingModal = ({ event, onClose, onSubmit, isGuest }: BookingModalProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        const bookingData = { firstName, lastName }
        if (isGuest) {
            onSubmit({ ...bookingData, email })
        } else {
            onSubmit(bookingData)
        }
        onClose()
    }

    return (
    <div className="booking-modal-backdrop">
      <div className="booking-modal">
        <h4>Complete Your Booking</h4>

        <div className="booking-modal-event-info">
            <h5 className="event-title">{event.title}</h5>
            <p><i className="bi bi-geo-alt icon-margin" /> {event.location}</p>
            <p><i className="bi bi-calendar-event icon-margin" /> {formatDateTime(event.date)}</p>
            <p><i className="bi bi-currency-dollar icon-margin" /> {event.price}</p>
        </div>

            <hr />

        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        {isGuest && (
          <input
            type="email"
            placeholder="Email (required)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}

        <div className="booking-modal-buttons">
          <button className="booking-modal-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="booking-modal-book-button" onClick={handleSubmit}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingModal