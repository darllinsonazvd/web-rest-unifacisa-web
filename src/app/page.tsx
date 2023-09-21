import Image from 'next/image'
import Link from 'next/link'

import unifacisaLogo from '../assets/img/logo-unifacisa.png'

import { AuthForm } from '@/components/auth-form'

export default function Home() {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="bg-muted relative hidden h-full flex-col items-center justify-center p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="relative z-20 flex items-center">
          <Image src={unifacisaLogo} alt="Unifacisa logo" width={400} />
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Faça login na plataforma
            </h1>
            <p className="text-muted-foreground text-sm">
              Entre com e-mail e senha ou faça seu cadastro!
            </p>
          </div>

          <AuthForm />

          <p className="text-muted-foreground px-8 text-center text-sm">
            Ao se autenticar, você concorda com nossos{' '}
            <Link
              href="/terms"
              className="hover:text-primary underline underline-offset-4"
            >
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link
              href="/privacy"
              className="hover:text-primary underline underline-offset-4"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
