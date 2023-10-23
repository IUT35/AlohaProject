import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ticket X</span>
        <div className="navItems">
        <button className="navButton">Sign up </button>
        <button className="navButton">Login</button>
        </div>

      </div>
      </div>

  )
}

export default Navbar