import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stepper from "../../../components/stepper/stepper";

describe("Stepper", () => {
	it("renders all steps with correct labels", () => {
		render(<Stepper currentStep={0} />);
		
		// Use getAllByText for duplicate labels
		const fahrzeugLabels = screen.getAllByText("Fahrzeug");
		expect(fahrzeugLabels).toHaveLength(2);
		expect(screen.getByText("Termin")).toBeInTheDocument();
		expect(screen.getByText("Kontakt")).toBeInTheDocument();
	});

	it("displays step numbers correctly", () => {
		render(<Stepper currentStep={0} />);
		
		expect(screen.getByText("1")).toBeInTheDocument();
		expect(screen.getByText("2")).toBeInTheDocument();
		expect(screen.getByText("3")).toBeInTheDocument();
		expect(screen.getByText("4")).toBeInTheDocument();
	});

	it("highlights the current step correctly", () => {
		render(<Stepper currentStep={1} />);
		
		const step2Button = screen.getByText("2").closest("button");
		expect(step2Button).toHaveStyle("background-color: #3B82F6");
		expect(step2Button).toHaveClass("text-white");
	});

	it("shows completed steps with blue styling", () => {
		render(<Stepper currentStep={2} />);
		
		const step1Button = screen.getByText("1").closest("button");
		const step2Button = screen.getByText("2").closest("button");
		
		expect(step1Button).toHaveStyle("background-color: #3B82F6");
		expect(step1Button).toHaveClass("text-white");
		expect(step2Button).toHaveStyle("background-color: #3B82F6");
		expect(step2Button).toHaveClass("text-white");
	});

	it("shows future steps with gray styling", () => {
		render(<Stepper currentStep={1} />);
		
		const step3Button = screen.getByText("3").closest("button");
		const step4Button = screen.getByText("4").closest("button");
		
		expect(step3Button).toHaveStyle("background-color: #E5E7EB");
		expect(step3Button).toHaveClass("text-gray-600");
		expect(step4Button).toHaveStyle("background-color: #E5E7EB");
		expect(step4Button).toHaveClass("text-gray-600");
	});

	it("calls onStepClick when a step is clicked", () => {
		const mockOnStepClick = jest.fn();
		render(<Stepper currentStep={0} onStepClick={mockOnStepClick} />);
		
		const step2Button = screen.getByText("2").closest("button");
		fireEvent.click(step2Button!);
		
		expect(mockOnStepClick).toHaveBeenCalledWith(1);
	});

	it("does not call onStepClick when no handler is provided", () => {
		render(<Stepper currentStep={0} />);
		
		const step2Button = screen.getByText("2").closest("button");
		fireEvent.click(step2Button!);
		
		// Should not throw any errors
		expect(step2Button).toBeInTheDocument();
	});

	it("applies correct styling to step labels", () => {
		render(<Stepper currentStep={1} />);
		
		// Get labels by their position in the DOM
		const labels = screen.getAllByText("Fahrzeug");
		const step2Label = screen.getByText("Termin");
		
		// First Fahrzeug (step 1) should be blue (completed)
		expect(labels[0]).toHaveStyle("color: #3B82F6");
		// Termin (step 2) should be blue (active)
		expect(step2Label).toHaveStyle("color: #3B82F6");
		// Second Fahrzeug (step 3) should be gray (future)
		expect(labels[1]).toHaveStyle("color: #374151");
	});

	it("renders connecting lines between steps", () => {
		render(<Stepper currentStep={0} />);
		
		// Should have 3 connecting lines for 4 steps
		// Lines are divs with inline styles containing width and height
		const allDivs = document.querySelectorAll('div');
		const connectingLines = Array.from(allDivs).filter(div => {
			const style = div.getAttribute('style') || '';
			return style.includes('width:') && style.includes('height:') && style.includes('52px') && style.includes('4px');
		});
		expect(connectingLines).toHaveLength(3);
	});

	it("applies responsive classes correctly", () => {
		render(<Stepper currentStep={0} />);
		
		// Find the main container with responsive classes
		// The structure is: outer div (with responsive classes) > inner div > button
		const button = screen.getByText("1").closest("button");
		const innerDiv = button?.closest("div");
		const mainContainer = innerDiv?.parentElement;
		expect(mainContainer).toHaveClass("justify-center");
		expect(mainContainer).toHaveClass("lg:justify-start");
	});

	it("handles edge case when currentStep is 0", () => {
		render(<Stepper currentStep={0} />);
		
		const step1Button = screen.getByText("1").closest("button");
		expect(step1Button).toHaveStyle("background-color: #3B82F6");
		expect(step1Button).toHaveClass("text-white");
	});

	it("handles edge case when currentStep is last step", () => {
		render(<Stepper currentStep={3} />);
		
		const step4Button = screen.getByText("4").closest("button");
		expect(step4Button).toHaveStyle("background-color: #3B82F6");
		expect(step4Button).toHaveClass("text-white");
	});
});
