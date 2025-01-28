import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Connections from "./components/Connections"
import Request from "./components/Request"

function App() {
  return (
    <BrowserRouter basename="/">
<Routes>
<Route path="/" element={<Body />}>
<Route path="/login" element={<Login />} />
<Route path="/profile" element={<Profile />} />
<Route path="/connections" element={<Connections />} />
<Route path="/requests" element={<Request />} />
</Route>
</Routes>

    </BrowserRouter>

  )
}

export default App
