export default function Home() {
  return <div>Home</div>;
}

export async function getServerSideProps() {
  const Bot = await import("../bot");

  Bot.default.start(String(process.env.DISCORD_TOKEN));

  return {
    props: {},
  };
}
