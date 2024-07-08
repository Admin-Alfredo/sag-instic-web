import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import InputText from '../../components/InputText';
import ButtonLarge from '../../components/ButtonLarge';
import GoogleIcon from '../../components/GoogleIcon';
import { MdEmail, MdLock } from 'react-icons/md';

const SignIn: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke  xl:w-1/2  mx-auto">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium"></span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-center">
                Fazer login no SAG-INSTIC
              </h2>
              <form>
                <div className="mb-4">
                  <InputText name='email' placeholder='Entra com seu email' label='Email' Icon={MdEmail} />
                </div>

                <div className="mb-4">
                  <InputText name='password' placeholder='Entra com a password' label='Password' Icon={MdLock} />
                </div>

                <div className='mb-5'>
                  <Link to="/auth/reset/password" className="text-primary">Esquici a minha password</Link>
                </div>

                <div className="mb-5">
                  <ButtonLarge label='Login' />
                </div>
                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                  <GoogleIcon />
                  <span> Sign up with Google</span>
                </button>

                <div className="mt-6 text-center">
                  <p>
                    Não tens uma conta?{' '}
                    <Link to="/auth/signup" className="text-primary">Signup</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
