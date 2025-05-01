import { RiCalendarTodoFill } from 'react-icons/ri'

const Header = ({ 
  rightside
}: {
  rightside: React.ReactNode
}) => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-neutral-700 text-white">
      <div className='flex flex-row gap-2 items-center'>
        <RiCalendarTodoFill size={30} />
        <h1 className="text-2xl font-bold">
          Todovazz App
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        {rightside} 
      </div>
    </header>
  );
};

export default Header;
