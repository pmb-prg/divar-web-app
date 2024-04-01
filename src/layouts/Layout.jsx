import Footer from "./Footer"
import Header from "./Header"

function Layout({ children }) {
  return (
    <div className=" w-svh ">
        <Header />
            <div className=" min-h-dvh">{children}</div>
        <Footer />
    </div>
  )
}

export default Layout