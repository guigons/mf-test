import dynamic from 'next/dynamic';

const Header = dynamic(() => import("nav/Header"), {
  ssr: false,
  loading: () => <h1>Loading...</h1>,
})

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Header />
    </>
  )
}
