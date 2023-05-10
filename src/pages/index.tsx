import Searchbar from '@/components/Searchbar'

const Home = () => {
  return (
    <div className="flex flex-col p-4 text-zinc-300">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center">
        <Searchbar />
      </div>
      {/* <Footer /> */}
    </div>
  )
}
export default Home
