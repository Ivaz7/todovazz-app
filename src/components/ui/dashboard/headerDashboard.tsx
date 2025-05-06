import Header from "../header";
import LogOutBtn from "./logOutBtn";
import { MdOutlineDashboard } from 'react-icons/md'

export default function HeaderDashboard ({
  name
}: {
  name: string
}) {
  return (
    <Header 
      rightside={<LogOutBtn />}
      leftSide={
        <>
          <MdOutlineDashboard size={30} />
          <h1 className="text-2xl font-bold">
            Dashboard {name}
          </h1>
        </>
      }
    />
  )
}