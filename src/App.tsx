import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";

import { CartProvider } from "@/contexts/CartContext";

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
      <header className="w-full h-[6vh] pt-6">
        <nav className="">
          <ul className="flex list-none gap-3 justify-end h-full">
            {navigationLinks.map((navLink, index) =>
              <li key={index}>
                <Link to={navLink.path} className="inline-block px-8 py-3 text-base font-semibold text-cyan-600 transition duration-300 rounded-lg hover:bg-cyan-50 hover:text-cyan-700 border border-cyan-200 hover:border-cyan-300">
                  {navLink.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className='w-full min-h-[94vh] flex justify-center items-start pt-8 overflow-auto'>
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

  return <CartProvider><RouterProvider router={router} /></CartProvider>;
}

export default App
