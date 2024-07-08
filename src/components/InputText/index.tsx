import { InputHTMLAttributes } from "react"
import { IconType } from "react-icons"

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  Icon?: IconType
  label?: string
}
const InputText: React.FC<IProps> = function (props: IProps) {
  const { Icon, label } = props
  return (
    <div>
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        {label && label}
      </label>

      <div className="relative">
        <input
          {...props}
          className="w-full rounded-lg border text-xl border-stroke bg-transparent py-3 pl-10 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:focus:ring-blue-800 focus:ring-blue-500 focus:ring-4" />
        <span className="absolute left-4 top-4">
          {Icon && <Icon size={20}/>}
        </span>
      </div>
    </div>
  )
}

export default InputText
