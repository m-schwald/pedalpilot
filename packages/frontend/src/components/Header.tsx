import { AppBar, Stack, Typography } from "@mui/material"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <AppBar position="static">
      <Stack direction="row" spacing={2} sx={{ padding: "20px"}} alignItems="center" justifyContent="space-between">
        <Link to="/">
          <img src={logo} alt="Pedalpilot Logo" height="80px" width="80px" />
        </Link>
        <Stack direction="row" spacing={2}>
          <Link to="/customers"><Typography variant="h4">Customers</Typography></Link>
          <Link to="/deliveries"><Typography variant="h4">Deliveries</Typography></Link>
          <Link to="/riders"><Typography variant="h4">Riders</Typography></Link>
        </Stack>
      </Stack>
    </AppBar>
  )
}

export default Header