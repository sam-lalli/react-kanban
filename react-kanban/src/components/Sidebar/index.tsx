import {
	AppsOutline,
	ChevronDown,
	HomeOutline,
	ListOutline,
    PersonCircle,
} from "react-ionicons";

const Sidebar = () => {
	const navLinks = [
		{
			title: "Dashboard",
			icon: (
				<HomeOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Board View",
			icon: (
				<AppsOutline
					color="#555"
					width="22px"
					height="22px"
				/>
			),
			active: true,
		},
	];
	return (
		<div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
			<div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">
                <div className="flex items-center gap-3 cursor-pointer">
                    <PersonCircle
                        color="#7F00FF"
                        width={"28px"}
                        height={"28px"}
                    />
                    <span className="text-black font-semibold md:text-lg text-sm whitespace-nowrap">
                        QA Wolf
                    </span>
                    <ChevronDown
                        color="#000000"
                        width={"16px"}
                        height={"16px"}
                    />
                </div>
			</div>
			<div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
				{navLinks.map((link) => {
					return (
						<div
							key={link.title}
							className={`flex items-center gap-2 w-full rounded-lg hover:bg-[#bf7fff] px-2 py-3 cursor-pointer ${
								link.active ? "bg-[#bf7fff]" : "bg-transparent"
							}`}
						>
							{link.icon}
							<span className="font-medium text-[15px] md:block hidden">{link.title}</span>
						</div>
					);
				})}
				<div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-[#bf7fff] px-2 py-3 cursor-pointer bg-gray-200">
					<ListOutline />
					<span className="font-medium text-[15px] md:block hidden">Back to List view</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;