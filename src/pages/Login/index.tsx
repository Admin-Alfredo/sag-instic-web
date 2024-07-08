import { useState } from "react";
import CheckBox from "../../components/CheckBox";
import InputField from "../../components/InputText";
import { TLoginData } from '../../types.js'
import { useFormik } from "formik";
import * as Services from '../../services'
import { useNavigate } from "react-router-dom";



export default function () {
  const [datas, setDatas] = useState({})
  const navigate = useNavigate()
  // const [handleStep, registerHandleStep] = useState<TRegisterHandleStep | null>(null)

  const { handleChange, handleSubmit, values, setValues, errors } = useFormik<TLoginData>({
    initialValues: { email: "", password: "" },
    onSubmit: async (values, { setSubmitting }) => {
      const responde = await Services.login(values)
      
      if (responde.status! < 400 && responde.data.token) {
        localStorage.setItem('TOKEN_SGA', responde.data.token)
        navigate('/reset/password')
      }

      if (responde.status == 200) {

      } else if (responde.status == 300) {

      }

      setDatas(responde)
    }
  })



  return (
    <>
      <form className="max-w-sm mx-auto overflow-hidden px-2" onSubmit={handleSubmit} >
        <div className="info">
          <h2 className="bold text-gray-700 uppercase text-center mb-4 dark:text-white">Entrar no SGA INSTIC</h2>
        </div>
        <div className="mb-5" >
          <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <InputField
            type="text"
            value={values.email}
            name="email"
            placeholder="email completo"
            onChange={handleChange} />

          {errors.email}
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={({ target }: { target: HTMLInputElement }) => { setValues({ ...values, [target.name]: target.value }) }}
          />
          {errors.email}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <CheckBox label="Lembrar-me" />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lembrar me</label>
        </div>
        <div className="">
          <button type="submit" className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span className="mr-2">submit</span>
          </button>

        </div>
      </form>
      <pre>{JSON.stringify(datas, null, 2)}</pre>
    </>

  )
}


