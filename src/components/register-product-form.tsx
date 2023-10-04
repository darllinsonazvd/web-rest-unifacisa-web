'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function RegisterProductForm() {
  return (
    <form className="flex w-full max-w-screen-md flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          placeholder="Galaxy A51, Macbook Pro, Bolo de chocolate, Canela de véi, etc..."
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          className="h-24 resize-none"
          placeholder="Celular ótimo, pouco tempo de uso, conta com 4GB de RAM e 128GB de armazenamento..."
          id="description"
        />
        <p className="text-sm text-muted-foreground">
          Produtos com uma boa descrição podem vender até 25% mais!
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <Label htmlFor="price">Preço</Label>
        <Input id="price" placeholder="R$ 0,00" type="number" />
      </div>

      <div className="flex flex-col gap-2.5">
        <Label htmlFor="price">URL da foto do produto</Label>
        <Input id="price" placeholder="https://..." type="text" />
        <p className="text-sm text-muted-foreground">
          Adicione uma URL *pública* da foto do seu produto
        </p>
      </div>

      <Button className="w-fit">Salvar e anunciar</Button>
    </form>
  )
}
