import { Text } from "@/components/shared"
import { NavbarMain } from "@/components/layout"

export default function Home() {
  return (
    <main className='container'>
        <NavbarMain />
        <Text variant={'h1'}>PAGINA PRINCIPAL</Text>
    </main>
  )
}
