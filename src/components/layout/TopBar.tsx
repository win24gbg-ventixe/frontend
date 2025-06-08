import '../../styles/AppLayout.css';
import '../../styles/TopBar.css';
import { useTopBar } from '../../context/TopBarContext'

const TopBar = () => {
    const { title } = useTopBar()

    {/*const user = {
    name: 'Andreas Laine',
    avatarUrl: '',
  }
    */}

    return (
        <header className="top-bar d-flex justify-content-between align-items-center">
      <h4 className="topbar-title mb-0">{title}</h4>

      {/*
      <div className="top-bar-icons d-flex align-items-center gap-3">
        <div className="topbar-icon bg-dark-purple">
          <i className="bi bi-bell" />
        </div>

        <div className="topbar-icon bg-dark-purple">
          <i className="bi bi-gear" />
        </div>

        <div className="topbar-user d-flex align-items-center">
          <div className="topbar-avatar" />
          <div className="topbar-name">{user.name}</div>
        </div>
      </div>
      */}
    </header>
    )
}

export default TopBar;