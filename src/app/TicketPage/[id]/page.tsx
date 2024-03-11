import TicketForm from "@/app/(components)/TicketForm"

const TicketPage = async ({ params }: { params: { id: string } }) => {
  const EDITMODE = params.id !== 'new';

  let updateTicketData: ITicket | null = null;

  const getTicketById = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${params.id}`, {
        cache: "no-store",
        method: 'GET'
      });

      if (!res.ok) throw new Error('Error fetching ticket');

      const resJSON = await res.json();

      return resJSON.ticket;

    } catch (error) {
      console.error('Error fetching ticket by id: ', error);
    }
  }

  if (EDITMODE) updateTicketData = await getTicketById()  

  return (
	  <TicketForm ticket={updateTicketData} />
  )
}

export default TicketPage