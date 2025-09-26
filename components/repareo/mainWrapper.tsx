import type { ReactNode } from "react";

export default function MainWrapper({ children }: { children: ReactNode }) {
	return (
		<main className={"max-w-screen-lg mx-auto"}>
			{/* Mobile/Tablet: Stacked, Desktop: Side by side */}
			<div
				className={
					"flex flex-col lg:flex-row px-6 md:px-8 lg:px-0"
				}
				style={{
					gap: '0px' // Mobile gap
				}}
			>
				{/* Left column */}
				<div className="w-full lg:w-[586.67px]">
					{children[0]}
				</div>
				{/* 132px gap */}
				<div className="hidden lg:block w-[132px]"></div>
				{/* Right column */}
				<div className="w-full lg:w-[341.33px]">
					{children[1]}
				</div>
			</div>
		</main>
	);
}
