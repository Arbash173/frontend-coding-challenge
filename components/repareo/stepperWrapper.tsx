import type { ReactNode } from "react";

export default function StepperWrapper({ children }: { children: ReactNode }) {
	return (
		<div className={"pt-0"}>
			{/* Stepper Container */}
			<div className={"py-4 md:py-6 lg:py-8 lg:flex lg:items-center lg:justify-center"}>
				{children}
			</div>
			
			{/* Content Box - Mobile: 354px × 169px, Desktop: 586.64px × 638px */}
			<div className={"mt-8"}>
				<div
					className="h-[169px] lg:h-[638px] relative mx-auto lg:mx-0"
					style={{
						width: '354px', // Mobile width
						height: '169px', // Mobile height
						borderRadius: '12px',
						background: '#FFFFFF'
					}}
				>
					{/* Desktop styles */}
					<div 
						className="hidden lg:block absolute inset-0 rounded-xl pointer-events-none"
						style={{
							width: '586.64px',
							height: '638px',
							borderRadius: '12px',
							background: '#FFFFFF',
							border: '1px dashed #6B7280'
						}}
					></div>
					
					{/* Mobile dashed border */}
					<div 
						className="lg:hidden absolute inset-0 rounded-xl pointer-events-none"
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
