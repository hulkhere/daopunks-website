import "./App.css";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import NftGallery from "./pages/nft-gallery";
import Grants from './pages/grants';
import Apply from './pages/apply';  
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  console.log('Made with ❤️ by OverAchiever');
  return (
    <Router>
      <Route path="/gallery" component={NftGallery} />
      <Route path="/redeem" component={Wallet} exact />
      <Route path="/" component={Home} exact />
      <Route path="/grants" component={Grants} />
      <Route path="/grants/apply" component={Apply} />

    </Router>
  );
}

export default App;
