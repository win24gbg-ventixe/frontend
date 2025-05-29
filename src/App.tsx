import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import EventsPage from './pages/EventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import BookingConfirmationPage from './pages/BookingConfirmationPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/booking/confirmation" element={<BookingConfirmationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  )
}

export default App