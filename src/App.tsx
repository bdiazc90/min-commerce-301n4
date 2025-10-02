import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";

function Layout() {

  const navigationLinks = [
    { path: "/", label: "Home" },
    // { path: "/about", label: "Nosotros" },
    // { path: "/contact", label: "Contacto" },
    { path: "/cart", label: "Carrito" },
    { path: "/checkout", label: "Checkout" },
  ]

  return (
    <>
      <header>
        <nav>
          <ul className="flex list-none gap-4 justify-end h-20vh pt-10 pe-4">
            {navigationLinks.map((navLink, index) =>
              <li key={index}>
                <Link to={navLink.path} className="px-10 py-4 text-xl font-semibold text-center 
text-white transition duration-300 rounded-lg hover:from-purple-600 
hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 
md:w-auto">{navLink.label}</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className='w-full h-[80vh] flex justify-center items-center'>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "checkout",
          element: <CheckoutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
