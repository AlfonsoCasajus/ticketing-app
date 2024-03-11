interface ITicket {
	_id?: string;
	title: string;
	description: string;
	status: string;
	priority: number;
	category: string;
	createdAt: Date;
}