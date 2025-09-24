import type { ReactNode } from "react";

export default function StepperWrapper({ children }: { children: ReactNode }) {
	return (
		<div className={"pt-6 lg:pt-0"}>
			<div className={"py-4 lg:py-8"}>{children}</div>
			<div className={"mt-8"}>
				<div
					className="h-[169px] lg:h-[638px] relative"
					style={{
						width: '354px',
						height: '169px',
						borderRadius: '12px',
						background: '#FFFFFF'
					}}
				>
					{/* Dashed border using pseudo-element to prevent overflow */}
					<div 
						className="absolute inset-0 rounded-xl pointer-events-none"
						style={{
							border: '1px dashed #6B7280',
							background: 'transparent'
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
