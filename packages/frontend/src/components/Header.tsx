import { AppBar, IconButton, Stack, Typography } from "@mui/material"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <AppBar position="static">
      <Stack direction="row" spacing={2} sx={{ padding: "20px"}} alignItems="center" justifyContent="space-between">
        <img src={logo} alt="Pedalpilot Logo" height="80px" width="80px" />
        <Stack direction="row" spacing={2}>
          <a href="/customers"><Typography variant="h4">Customers</Typography></a>
          <a href="/deliveries"><Typography variant="h4">Deliveries</Typography></a>
          <a href="/riders"><Typography variant="h4">Riders</Typography></a>
        </Stack>
      </Stack>
    </AppBar>
  )
}

export default Header