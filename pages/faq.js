import FAQScreen from "../src/screens/FAQScreen";
export default FAQScreen;

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/fragadesiree/573d0eb03b3ccb550a80ef102e2d127b/raw/9094aea4f62740cf6573d7c291510e7a2fb38f1a/nextjs-fake-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      qualquercoisa: "que eu passar aqui",
      faq,
    },
  };
}
