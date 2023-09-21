import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

export function AuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              E-mail
            </Label>
            <Input
              id="email"
              placeholder="Digite seu e-mail"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              id="password"
              placeholder="Digite sua senha"
              type="password"
            />
          </div>
          <Button className="mt-4">Entrar</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Não tem um registro?
          </span>
        </div>
      </div>

      <Button variant="outline" type="button">
        <Link href="/register">Criar conta</Link>
      </Button>
    </div>
  )
}
