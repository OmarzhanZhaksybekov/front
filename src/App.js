import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";
import { Contacts } from "./pages/Contacts";
import SignUp from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import RemoveCar from "./pages/RemoveCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cars/:id" element={<CarDetails />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin/add" element={<AddCar />} />
        <Route path="/admin/edit" element={<EditCar />} />
        <Route path="/admin/remove" element={<RemoveCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
