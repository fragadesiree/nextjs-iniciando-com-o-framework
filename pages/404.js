import Link from "next/link";

export default function Page404() {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404 :O</h1>
      {/* Não é necessario configurar um router para direcionar páginas, 
            o next já faz isso por debaixo dos panos */}
      <Link href="/">Ir para a HomePage</Link>
    </div>
  );
}
