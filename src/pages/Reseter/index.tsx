import { useFormik } from "formik";
import React, { useState } from "react";
import InputField from '../../components/InputText'

import * as Services from '../../services'
import { Link } from "react-router-dom";
import GoogleIcon from "../../components/GoogleIcon";
import ButtonLarge from "../../components/ButtonLarge";
import InputText from "../../components/InputText";
import { MdEmail, MdLock } from "react-icons/md";




export default function Reseter() {
  const [datas, setDatas] = useState({})
  const [message, setMessage] = useState("")
  const initialValues = { old_password: "", new_password: "", r_password: "" };



  const { handleChange, handleSubmit, values, setValues, errors } = useFormik({
    initialValues,
    async onSubmit(values) {
      const response = await Services.reset(values)
      if (response.status == 200)
        setMessage(response.message)


      setTimeout(() => setMessage(""), 4000)


      setDatas(response)

    },
    validate(values) {
      const errors = {};

      if (values.old_password.length < 8)
        //@ts-ignore
        errors.old_password = "Preenche o campo"

      if (!/[^a-zA-Z0-9]/.test(values.new_password))
        //@ts-ignore
        errors.new_password = "A password deve conter no minimo um caracter especial"

      if (values.r_password != values.new_password)
        //@ts-ignore
        errors.r_password = "A password está errada"

      if (values.new_password.length < 8)
        //@ts-ignore
        errors.new_password = "Password incompleta"

      return errors;
    }
  })
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="w-full border-stroke  xl:w-1/2  mx-auto">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium"></span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-center">
              Redefinir password
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <InputText
                  type='password'
                  name='old_password'
                  placeholder='Entra com password atual'
                  label='Atual password'
                  onChange={handleChange}
                  Icon={MdLock} />
                <span className="text-sm text-red-400">{errors.old_password}</span>
              </div>
              <div className="mb-4">
                <InputText
                  type='password'
                  name='new_password'
                  placeholder='Entra com a nova passord'
                  label='Nova passord'
                  onChange={handleChange}
                  Icon={MdEmail} />
                <span className="text-sm text-red-400">{errors.new_password}</span>
              </div>

              <div className="mb-4">
                <InputText
                  type='password'
                  name='r_password'
                  placeholder='Entra novamente com a nova passord'
                  label='Repitir a nova password'
                  onChange={handleChange}
                  Icon={MdLock} />
                <span className="text-sm text-red-400">{errors.r_password}</span>
              </div>

              <div className="mb-5">
                <ButtonLarge label='Redefinir' />
              </div>
              <div className='mb-5'>
                <Link to="/auth/signin" className="text-primary">Fazer login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <form className="max-w-sm mx-auto overflow-hidden px-2" onSubmit={handleSubmit} >
    //   <div className="info">
    //     <h2 className="bold text-gray-700 uppercase text-center mb-4 dark:text-white">Mudar a password</h2>
    //   </div>
    //   <span className="text-sm text-green-600">{message}</span>
    //   <div className="mb-5" >
    //     <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    //       Password antiga
    //     </label>
    //     <InputField
    //       type="password"
    //       value={values.old_password}
    //       name="old_password"
    //       placeholder="Password antiga"
    //       onChange={handleChange} />

    //     {errors.old_password}
    //   </div>
    //   <div className="mb-5">
    //     <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    //       Password nova
    //     </label>
    //     <InputField
    //       type="password"
    //       name="new_password"
    //       placeholder="Password"
    //       value={values.new_password}
    //       onChange={({ target }: { target: HTMLInputElement }) => { setValues({ ...values, [target.name]: target.value }) }}
    //     />
    //     <span className="text-sm text-red-400">{errors.new_password}</span>

    //   </div>
    //   <div className="mb-5" >
    //     <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    //       Repita a nova password
    //     </label>
    //     <InputField
    //       type="password"
    //       value={values.r_password}
    //       name="r_password"
    //       placeholder="Password antiga"
    //       onChange={handleChange} />
    //     <span className="text-sm text-red-400">{errors.r_password}</span>
    //   </div>
    //   <div className="">
    //     <button type="submit" className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //       <span className="mr-2">submit</span>
    //     </button>
    //   </div>
    //   <pre>{JSON.stringify(datas, null, 2)}</pre>
    // </form>
  )
}