import Button from "../components/repareo/button";
import ButtonWrapper from "../components/repareo/buttonWrapper";
import Header from "../components/repareo/header";
import MainWrapper from "../components/repareo/mainWrapper";
import StepperWrapper from "../components/repareo/stepperWrapper";
import Stepper from "../components/stepper/stepper";
import useStepper from "../hooks/useStepper";

export default function Home() {
	const { currentStep, handleNextStep, goToStep } = useStepper();
	return (
		<>
			<Header />
			<MainWrapper>
				{/* Left Column: Stepper + Content Box */}
				<div className="lg:col-span-1">
					<StepperWrapper>
						<Stepper currentStep={currentStep} onStepClick={goToStep} />
					</StepperWrapper>
				</div>
				{/* Right Column: Sidebar + Button */}
				<div className="lg:col-span-1">
					<ButtonWrapper>
						<Button onClick={handleNextStep}>Next</Button>
					</ButtonWrapper>
				</div>
			</MainWrapper>
		</>
	);
}
