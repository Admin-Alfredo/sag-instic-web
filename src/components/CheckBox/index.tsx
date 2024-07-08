import { InputHTMLAttributes } from "react"

type TProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}
const CheckBox: React.FC<TProps> = function CheckBox(props: TProps) {


    return (
        <>
            <input {...props} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 rounded-sm" required />
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ }</label>
        </>
    )
}

export default CheckBox;