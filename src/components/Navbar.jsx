import { Link } from "react-router-dom"
import FilterCountries from "./FilterCountries"
import SearchInput from "./SearchInput"

function Navbar() {
  return (
    <header className="navbar bg-base-100">
        <div className="site-container flex justify-between items-center w-full">
            <Link to="/" className="btn btn-success normal-case text-xl">
                Where in the World?
            </Link>
            <SearchInput/>
            <FilterCountries/>
        </div>
    </header>
  )
}

export default Navbar