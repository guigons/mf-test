import dynamic from 'next/dynamic';

const Header = dynamic(() => import("nav/Header"), {
  ssr: false,
  // loading: () => <Skeleton></Skeleton>,
})

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Header />
    </>
  )
}
