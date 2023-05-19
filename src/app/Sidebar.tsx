import Nav from './Nav';
import ToggleTheme from './ToggleTheme';

function Sidebar() {
  return (
    <aside className='mb-6'>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1" />
        <Nav />
        <ToggleTheme />
      </div>
    </aside>
  );
}

export default Sidebar;
