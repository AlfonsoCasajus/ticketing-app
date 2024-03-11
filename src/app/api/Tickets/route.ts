import Ticket from "@/app/(models)/Ticket";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const ticketData = body.formData;
		await Ticket.create(ticketData);

		return NextResponse.json({ message: 'Ticket Created' }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: 'Error creating Ticket: ', error }, { status: 500 });
	}
}
export async function GET() {
	try {
		const tickets = await Ticket.find();

		return NextResponse.json({ message: 'Ticket fetched', tickets }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error fetching Ticket: ', error }, { status: 500 });
	}
}
