import {Button, Stack} from "@mui/material";
import { Box, Container } from "@mui/system";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
