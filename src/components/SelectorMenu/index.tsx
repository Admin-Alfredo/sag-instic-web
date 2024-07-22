

import { SelectHTMLAttributes } from "react"
import { IconType } from "react-icons"
type TOption = {
    value: string, 
    label: string,
    selected?: boolean
}
type IProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string,
    options?: Array<TOption>
}
const SelectorMenu: React.FC<IProps> = function (props: IProps) {
    const { label, options } = props
    return (
        <div>
            <label className="mb-2.5 block font-medium text-black dark:text-white">
                {label && label}
            </label>

            <div className="relative">
                <select
                    {...props}
                    className="w-full rounded-lg border text-xl border-stroke bg-transparent py-2 pl-2 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:focus:ring-blue-800 focus:ring-blue-500 focus:ring-4">
                        {options?.map(op => <option value={op.value} selected={op.selected && op.selected}>{op.label}</option>)}
                </select>
            </div>
        </div>
    )
}

export default SelectorMenu

