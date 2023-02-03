import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <Header />
      <main className='w-full h-fit flex-1 mt-20'>
        <Main />
      </main>
      <footer className='w-full h-full text-center font-bold italic text-sm'>
        <p>Copyright 2023 Muhammad Hanif</p>
      </footer>
    </div>
  )
}

export default App
