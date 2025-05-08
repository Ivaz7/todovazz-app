import { TableCell } from "../table"

export default function DateColumnTable ({ date }: { date: Date }) {
  const newDate = new Date(date);
  const valDate = newDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
  
  const offsetMinutes = newDate.getTimezoneOffset(); 
  const offsetHours = -offsetMinutes / 60; 
  const utcString = `UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}`;
  
  return (
    <TableCell>
      {valDate} {utcString}
    </TableCell>
  )
}