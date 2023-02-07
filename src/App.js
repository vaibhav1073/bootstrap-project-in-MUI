
import { Container } from "@mui/system";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      
      <Navbar></Navbar>
      <Container sx={{bgcolor:'pink',marginTop:4,border:'2px solid black'}}>
      <Main></Main>
    </Container>
    <Footer />
    </div>
  
  );
}

export default App;
