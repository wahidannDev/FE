import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to="/rest/v1/register">Register</Link>
      <br></br>
      <Link to="/rest/v1/login">Login</Link>
    </div>
  )
}

export default Home
