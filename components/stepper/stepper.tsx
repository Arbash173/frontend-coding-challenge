import React from "react";
import { steps } from "./steps";

interface StepperProps {
	currentStep: number;
	onStepClick?: (stepIndex: number) => void;
}

export default function Stepper({ currentStep, onStepClick }: StepperProps) {
	return (
		<div className="flex items-center justify-center lg:justify-start relative">
			{steps.map((step, index) => {
				const isActive = index === currentStep;
				const isCompleted = index < currentStep;
				const isClickable = onStepClick !== undefined;
				
				return (
					<div key={index} className="flex items-center">
						{/* Step Circle */}
						<button
							onClick={() => isClickable && onStepClick(index)}
							disabled={!isClickable}
							className={`
								w-[30px] h-[30px] lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-sm lg:text-base font-medium transition-colors duration-200 relative z-10
								${isActive || isCompleted 
									? 'text-white' 
									: 'text-gray-600'
								}
								${isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}
							`}
							style={{
								backgroundColor: isActive || isCompleted ? '#3B82F6' : '#E5E7EB'
							}}
						>
							{index + 1}
						</button>
						
						{/* Connecting Line - only between steps */}
						{index < steps.length - 1 && (
							<div 
								className="transition-colors duration-200"
								style={{ 
									width: '52px',
									height: '4px',
									backgroundColor: isCompleted ? '#3B82F6' : '#E5E7EB'
								}}
							/>
						)}
					</div>
				);
			})}
			
			{/* Labels positioned below the entire stepper */}
			<div className="absolute top-[35px] lg:top-[45px] flex items-center">
				{steps.map((step, index) => {
					const isActive = index === currentStep;
					const isCompleted = index < currentStep;
					
					return (
						<div 
							key={`label-${index}`}
							className="flex flex-col items-center transition-colors duration-200"
							style={{
								width: '82px' // 30px circle + 52px line
							}}
						>
							<span
								style={{
									fontFamily: 'Inter',
									fontWeight: 600,
									fontSize: '12px',
									lineHeight: '16px',
									letterSpacing: '0%',
									textAlign: 'center',
									color: isActive || isCompleted ? '#3B82F6' : '#374151'
								}}
							>
								{step.title}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
