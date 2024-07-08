import { ButtonHTMLAttributes, lazy } from "react"

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string
}



const ButtonLarge: React.FC<IProps> = function (props: IProps) {
    const { label } = props
    return (
        <button
            {...props}
            value="Create account"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
        >
            {label && label}
        </button>
    )
}
export default ButtonLarge