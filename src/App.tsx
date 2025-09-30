import { ProductList } from "./components/ProductList"

function App() {

  return (
    <>
      <main className='w-full h-[100vh] flex justify-center items-center'>
        <div>
          <h1 className='text-5xl'>Min Commerce</h1>
          <h2 className="text-3xl">Productos</h2>
          <ProductList />
        </div>
      </main>
    </>
  )
}

export default App
