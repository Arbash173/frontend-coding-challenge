import { useState } from "react";

export default function useStepper(totalSteps: number = 4) {
	const [currentStep, setCurrentStep] = useState<number>(0);
	
	function handleNextStep() {
		setCurrentStep((prev) => {
			return Math.min(prev + 1, totalSteps - 1);
		});
	}

	function handlePreviousStep() {
		setCurrentStep((prev) => {
			return Math.max(prev - 1, 0);
		});
	}

	function goToStep(step: number) {
		setCurrentStep(Math.max(0, Math.min(step, totalSteps - 1)));
	}

	return { 
		currentStep, 
		handleNextStep, 
		handlePreviousStep, 
		goToStep,
		isFirstStep: currentStep === 0,
		isLastStep: currentStep === totalSteps - 1
	};
}
