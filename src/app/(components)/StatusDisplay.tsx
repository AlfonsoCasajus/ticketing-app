const StatusDisplay = ({ status }: { status: string }) => {

	const getColor = () => {
		let color = 'bg-slate-750';
		switch (status.toLocaleLowerCase()) {
			case "done":
				color = "bg-green-200";
				return color;
			case "started":
				color = "bg-yellow-200";
				return color;
			case "not started":
				color = "bg-red-200";
				return color;
		}

		return color;
	}
			
	return (
		<span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor()}`}>
			{ status }
		</span>
	)
}

export default StatusDisplay