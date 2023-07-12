import Navbar from "../header/Navbar"
import Footer from "../footer/Footer"


function StanderedLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default StanderedLayout