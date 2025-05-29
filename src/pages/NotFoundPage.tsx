import { usePageTitle } from '../hooks/usePageTitle'

const NotFoundPage = () => {
  usePageTitle('Not Found')

  return (
    <div className="container mt-4">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFoundPage