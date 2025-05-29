import Sidebar from '../layout/Sidebar';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';
import type { ReactNode } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="app-layout d-flex">
      <Sidebar />
      <div className="main-area flex-grow-1 d-flex flex-column">
        <TopBar />
        <div className='main-content flex-grow-1'>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout