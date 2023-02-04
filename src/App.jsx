import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <Header />
      <main className='w-full h-fit flex-1 mt-20 flex flex-col items-center justify-center text-center space-y-10'>
        <Hero />
        <Content />
        <Pricing />
        <About />
        <Contact />
      </main>
      <footer className='w-full h-full text-center font-bold italic text-sm'>
        <p>Copyright 2023 Muhammad Hanif</p>
      </footer>
    </div>
  )
}

export default App
