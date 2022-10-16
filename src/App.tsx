import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Logo } from './components/Logo';
import { Text } from './components/Text';
import { TextInput } from "./components/TextInput";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100 px-5">
      <div className="flex flex-col items-center justify-center">
        <Logo className="w-20 h-20 logo transition-all duration-75 ease-linear" />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="md" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </div>
      <form action="" className="flex flex-col items-stretch w-full gap-5 max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="sm" className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="text" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="sm" className="font-semibold">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
            <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline">Não possui conta crie uma agora</a>
        </Text>
      </footer>
    </div>
  );
}
