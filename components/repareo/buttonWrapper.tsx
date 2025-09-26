import type { ReactNode } from "react";

export default function ButtonWrapper({ children }: { children: ReactNode }) {
	return (
		<div className={"pt-8 lg:pt-12 lg:flex lg:flex-col lg:justify-between lg:h-full"}>
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
				<div 
					className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-none"
				>
					{children}
				</div>
			</div>
		</div>
	);
}
