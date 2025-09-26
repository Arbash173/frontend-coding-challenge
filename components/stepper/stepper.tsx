import React from "react";
import { steps } from "./steps";

interface StepperProps {
	currentStep: number;
	onStepClick?: (stepIndex: number) => void;
}

export default function Stepper({ currentStep, onStepClick }: StepperProps) {
	return (
		<div className="progress-container">
			{steps.map((step, index) => {
				const isActive = index === currentStep;
				const isCompleted = index < currentStep;
				const isClickable = onStepClick !== undefined;
				
				return (
					<div 
						key={index} 
						className={`
							step transition-colors duration-200
							${isCompleted ? 'completed' : ''}
						`}
					>
						{/* Step Circle */}
						<button
							onClick={() => isClickable && onStepClick(index)}
							disabled={!isClickable}
							className={`
								step-circle transition-colors duration-200
								${isActive || isCompleted 
									? 'bg-indigo-500 text-white' 
									: 'bg-gray-200 text-gray-600'
								}
								${isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}
							`}
						>
							{index + 1}
						</button>
						
						{/* Step Label */}
						<div 
							className={`
								step-label transition-colors duration-200
								${isActive || isCompleted 
									? 'text-indigo-500' 
									: 'text-gray-600'
								}
							`}
						>
							{step.title}
						</div>
					</div>
				);
			})}
		</div>
	);
}
