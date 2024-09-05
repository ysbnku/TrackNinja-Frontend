//COMPONENTS

interface ErrorComponentProps {
	errorMessage: string;
}

const ErrorComponent = (props: ErrorComponentProps) => {
	return (
		<>
		<h2 className="text-left mt-5 pt-2">
		<strong>Motivo do erro: &nbsp; </strong>
		{props.errorMessage}
		</h2>
		</>
	);
};

export default ErrorComponent;
