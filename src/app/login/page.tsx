import Image from 'next/image'
import Link from 'next/link'

import { AuthForm } from '@/components/auth-form'

export default function Login() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col items-center justify-center bg-muted text-white dark:border-r lg:flex">
        <div className="absolute inset-0 z-10 bg-slate-950/90" />
        <div className="absolute inset-0 bg-[url('/bg-auth.jpg')]" />
        <div className="relative z-20 flex items-center">
          <Image
            src="/assets/img/logo-unifacisa.png"
            alt="Unifacisa logo"
            width={360}
            height={80}
          />
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Faça login na nossa budega!
            </h1>
            <p className="text-sm text-muted-foreground">
              Entre com e-mail e senha ou faça seu cadastro!
            </p>
          </div>

          <AuthForm />

          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao se autenticar, você concorda com nossos{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
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
