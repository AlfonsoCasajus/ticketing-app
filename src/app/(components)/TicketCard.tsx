import Link from "next/link";
import CategoryDisplay from "./CategoryDisplay";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }: { ticket: ITicket }) => {
	const formatTimestamp = () => {
		const ticketDate = new Date(ticket.createdAt);
		const formattedDate = ticketDate.toLocaleString("es-AR", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour:'2-digit',
			minute: '2-digit',
			hour12: true
		});

		return formattedDate;
	}
	formatTimestamp()
	return (
		<Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }} >
			<div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
				<div className="flex mb-3">
					<PriorityDisplay priority={ ticket.priority } />

					<div className="ml-auto">
						<DeleteBlock id={ticket._id} />
					</div>
				</div>
					<h4>{ ticket.title }</h4>
					<hr className="h-px border-0 bg-yellow-500 opacity-40 mb-1 mt-1" />
					<p className="whitespace-pre-wrap">
						{ ticket.description }
					</p>
					<div className="flex-grow" />
					<div className="flex mt-2">
						<div className="flex flex-col">
							<p className="text-xs my-1">{formatTimestamp()}</p>
						</div>
						<div className="ml-auto flex items-end">
							<CategoryDisplay category={ticket.category} />
							<StatusDisplay status={ticket.status} />
						</div>
					</div>
			</div>
		</Link>
	)
}

export default TicketCard