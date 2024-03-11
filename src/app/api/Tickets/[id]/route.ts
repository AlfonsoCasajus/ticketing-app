import Ticket from "@/app/(models)/Ticket";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const { id } = params;
		await Ticket.findByIdAndDelete(id);

		return NextResponse.json({ message: 'Ticket deleted' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error deleting ticket: ', error }, { status: 500 });
	}
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const { id } = params;
		const ticket = await Ticket.findById(id);

		return NextResponse.json({ message: 'Ticket fetched', ticket }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error fetching Ticket: ', error }, { status: 500 });
	}
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const { id } = params;
		const body = await req.json();
		const ticketData = body.formData;

		const ticket = await Ticket.findByIdAndUpdate(id, {
			...ticketData
		});

		return NextResponse.json({ message: 'Ticket updated', ticket }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error updating Ticket: ', error }, { status: 500 });
	}
}
