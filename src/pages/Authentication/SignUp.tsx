import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import InputText from '../../components/InputText';
import {  MdArrowRightAlt } from 'react-icons/md';
import GoogleIcon from '../../components/GoogleIcon';
import ButtonLarge from '../../components/ButtonLarge';
import { useFormik } from 'formik';
import CheckBox from '../../components/CheckBox';
const SignUp: React.FC = () => {
  const [itemFormWidth, setItemFormWidth] = useState(0);
  const wrapperFieldForm = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let itemsForm;
    for (itemsForm of wrapperFieldForm.current?.children!) {
      itemsForm.parentElement!.style.width = `${(itemsForm.parentElement?.getBoundingClientRect().width! * wrapperFieldForm.current?.children.length!) + (10 * wrapperFieldForm.current?.children.length!)}px`
      itemsForm.style.width = `${itemsForm.parentElement?.parentElement?.getBoundingClientRect().width}px`
    }
    setItemFormWidth(itemsForm?.parentElement?.parentElement?.getBoundingClientRect().width!)
  })
  const handleNextStepForm = () => {
    console.log()
    wrapperFieldForm.current!.style.marginLeft = `-${itemFormWidth}px`
  }
  const { handleChange, handleSubmit, values, setValues, errors } = useFormik({
    initialValues: { email: '', nome: '', nprocesso: 0, turma: '', ano: '' },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values, setSubmitting)
      setDatas(values)
    }
  })

  return (
    <>
      <Breadcrumb pageName="Sign Up" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke  xl:w-1/2  mx-auto">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium"></span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl text-center">
                Cadastar no SAG-INSTIC
              </h2>
              <form className=" mx-auto  overflow-hidden py-2" onSubmit={handleSubmit} >
                <div className="form-items transition-all duration-300 flex items-center" ref={wrapperFieldForm}>
                  <div className="form-item inline-block px-2">
                    <div className="info">
                      <h2 className="bold text-gray-700 uppercase text-center mb-4 dark:text-white">Dados Pessoas</h2>
                    </div>
                    <div className="form-item">
                      <div className="mb-5" >
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                        <InputText
                          type="text"
                          value={values.nome}
                          name="nome"
                          placeholder="nome completo"
                          onChange={handleChange} />

                        {errors.nome}
                      </div>
                      <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <InputText
                          type="email"
                          name="email"
                          placeholder="Seu melhor email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        {errors.email}
                      </div>
                    </div>
                  </div>
                  <div className="form-item inline-block px-2">
                    <div className="info">
                      <h2 className="bold text-gray-700 uppercase text-center mb-4 dark:text-white">Dados Acâdemico</h2>
                    </div>
                    <div className="form-item flex flex-wrap">
                      <div className="mb-5 w-full block">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Nº de processo
                        </label>
                        <InputText
                          type="number"
                          name="nprocesso"
                          placeholder="Nº do processo"
                          value={values.nprocesso}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-5  w-1/2 pr-2">
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Ano
                        </label>
                        <select
                          value={values.ano}
                          name="ano"
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:ring-4 dark:focus:border-blue-500">
                          <option selected>Escolher a turma</option>
                          <option value="1">1º ano</option>
                          <option value="2">2º ano</option>
                          <option value="3">3º ano</option>
                          <option value="4">4 º ano</option>
                          <option value="5">5 º ano</option>
                        </select>
                      </div>
                      <div className="mb-5  w-1/2 pl-2">
                        <label htmlFor="turma" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Turma
                        </label>
                        <select
                          name="turma"
                          id="turma"
                          value={values.turma}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:ring-4 dark:focus:border-blue-500">
                          <option selected>Escolher a turma</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="E">E</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start mb-5 px-2">
                  <div className="flex items-center h-5">
                    <CheckBox />
                  </div>
                  <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lembrar me</label>
                </div>
                <div className="px-2">
                  <button onClick={handleNextStepForm} type="button" className="mb-2 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <span className="mr-2">Próximo</span> <MdArrowRightAlt />
                  </button>
                  <button type="submit" className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <span className="mr-2">submit</span>
                  </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
