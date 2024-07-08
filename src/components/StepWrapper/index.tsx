import React, {
	Children,
	Dispatch,
	SetStateAction,
	cloneElement,
	useEffect,
	useRef,
	useState
} from "react";


export type TRegisterHandleStep = {
	onNextStep: () => void,
	onPreviewStep: () => void
}

export type TProps = {
	children: React.ReactElement,
	registerHandleStep?: Dispatch<SetStateAction<TRegisterHandleStep>>
}

const StepWrapper: React.FC<TProps> = function ({ children, registerHandleStep }: TProps) {
	const handleNextStepForm = () => {
		console.log(itemFormWidth)
		wrapperFieldForm.current!.style.marginLeft = `-${itemFormWidth}px`
	}
	useEffect(() => {

		if (registerHandleStep)
			registerHandleStep({
				onNextStep: handleNextStepForm,
				onPreviewStep() { alert("Previews Step") },
			})
	}, [])

	const [itemFormWidth, setItemFormWidth] = useState(0);
	const wrapperFieldForm = useRef<HTMLDivElement>(null);
	useEffect(() => {
		let itemsForm;
		for (itemsForm of wrapperFieldForm.current?.children!) {
			itemsForm.parentElement!.style.width = `${(itemsForm.parentElement?.getBoundingClientRect().width! * wrapperFieldForm.current?.children.length!) + (10 * wrapperFieldForm.current?.children.length!)}px`
			itemsForm.style.width = `${itemsForm.parentElement?.parentElement?.getBoundingClientRect().width}px`
		}

		console.log(itemsForm?.parentElement?.parentElement?.getBoundingClientRect().width)
		setItemFormWidth(itemsForm?.parentElement?.parentElement?.getBoundingClientRect().width!)
	})



	return (
		<div className="form-items transition-all duration-300 flex items-center" ref={wrapperFieldForm}>
			{Children.map(children.props.children, (child) => (
				cloneElement(child, { className: `${child.props.className || ''} form-item inline-block bg-red-300` })
			))}
		</div>
	)
}


/* <StepWrapper registerHandleStep={registerHandleStep}>
	<>
	<div>
		<button onClick={handleStep?.onNextStep}>Next</button>
	</div>
	<div>B</div>
	</>
</StepWrapper> */



export default StepWrapper;