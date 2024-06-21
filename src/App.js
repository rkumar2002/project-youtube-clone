// this boiler-plate code can be implemented using 'rafce' keyword
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

// import Navbar from './components/Navbar';  // using path intellisense and npm intellisense extension, we can dblclick on component name and then ctrl+space to directly import them 
// import ChannelDetail from './components/ChannelDetail';
// import Feed from './components/Feed';
// import VideoDetail from './components/VideoDetail';
// import SearchFeed from './components/SearchFeed';

const App = () => {
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element ={<VideoDetail/>}/>
                <Route path="/channel/:id" element ={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm" element ={<SearchFeed/>}/>    
            </Routes>    
        </Box>
    </BrowserRouter>
}
export default App;

