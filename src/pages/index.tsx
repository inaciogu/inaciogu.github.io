import Head from 'next/head';
import Header from '../components/Header';
import HomeContainer from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHero />
        </main>
      </HomeContainer>
    </div>
  );
}
