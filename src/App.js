import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss';
// import Home from './components/Home'


function App() {
  return (
    <>
    <Routes>
    {/* <Route index element={<Home />} /> */}
    <Route path="/" element={<Layout />}/>
    </Routes>
    </>
  );
}

export default App;
