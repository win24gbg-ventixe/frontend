import AppLayout from "../components/layout/AppLayout";
import { usePageTitle } from '../hooks/usePageTitle';

const BookingConfirmationPage = () => {
  usePageTitle('Booking Confirmation');

  return (
    <AppLayout>
      <div className="container mt-4">
        <h2 className="mb-4">Booking Confirmation</h2>
        <div className="row">
          
        </div>
      </div>
    </AppLayout>
  );
};

export default BookingConfirmationPage;