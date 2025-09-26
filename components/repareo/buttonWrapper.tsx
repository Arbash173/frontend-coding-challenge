import type { ReactNode } from "react";

export default function ButtonWrapper({ children }: { children: ReactNode }) {
	return (
		<div className={"lg:pt-12 lg:flex lg:flex-col lg:justify-between lg:h-full"}>
			{/* Sidebar box with exact styling */}
			<div
				className="hidden lg:block relative"
				style={{
					width: '341.33px',
					height: '640px',
					borderRadius: '12px',
					background: '#FFFFFF',
					border: '1px dashed #6B7280'
				}}
			>
			</div>
			{/* Button at bottom */}
			<div className="lg:mt-8">
				{children}
			</div>
		</div>
	);
}
