import TicketCard from "./(components)/TicketCard"

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "GET",
      cache: "no-store"
    });

    return res.json();
  } catch (error) {
      console.error('Failed to get tickets: ', error);  
  }
}

const Dashboard = async () => {

  const { tickets } = await getTickets();

  const uniqueCategories = () => {
    const uniqueCategories = new Set<string>();
    tickets.forEach((ticket: ITicket) => {
      uniqueCategories.add(ticket.category)
    });
    return Array.from(uniqueCategories);
  }

  return (
    <div className="p-5">
      <div>
        {
          tickets && uniqueCategories().map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {
                  tickets.filter((ticket: ITicket) => ticket.category === uniqueCategory)
                  .map((ticket: ITicket, _index: number) => (
                    <TicketCard key={_index} ticket={ticket} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard