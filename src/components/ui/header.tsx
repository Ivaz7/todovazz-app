import { RiCalendarTodoFill } from 'react-icons/ri'

interface types {
  rightside: React.ReactNode,
  leftSide?: React.ReactNode
}

export default function Header ({ 
  rightside,
  leftSide,
}: types) {
  return (
    <header className="flex justify-between items-center p-4 border-b border-neutral-700 text-white">
      <div className='flex flex-row gap-2 items-center'>
        {leftSide ? (
          leftSide
        ) : (
          <>
            <RiCalendarTodoFill size={30} />
            <h1 className="text-2xl font-bold">
              Todovazz App
            </h1>
          </>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {rightside} 
      </div>
    </header>
  );
};