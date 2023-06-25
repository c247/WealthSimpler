import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login/Login";
import "./styles.css";

import {
  getEmailKeys,
  checkEmailExists,
  addFieldsToDatabase,
} from "./middleware/store";

import { createAccount } from "./middleware/createAccount";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar";
import CreateOrg from "./pages/CreateOrg/CreateOrg";
import Strategy from "./pages/Strategy/Strategy";
import Users from "./pages/Users/Users";
import Gas from "./pages/Gas/Gas";

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [privateKey, setPrivateKey] = useState<string | null>(null);

  // console.log("User", user);
  // console.log(createAccount());

  useEffect(() => {
    const handleUserData = async () => {
      if (user && user.email) {
        try {
          const emailExists = await checkEmailExists(user.email);
          if (emailExists) {
            const { publicKey, privateKey } = await getEmailKeys(user.email);
            console.log("pubKey", publicKey);
            console.log("priKey", privateKey);
            setPublicKey(publicKey);
            setPrivateKey(privateKey);
          } else {
            const [pubKey, privKey] = await createAccount();
            setPublicKey(pubKey);
            setPrivateKey(privKey);
            await addFieldsToDatabase(user.email, pubKey, privKey);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    handleUserData();
  }, []);

  return (
    <div className="app">
      <Navbar />
      {isAuthenticated ? (
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/new" element={<CreateOrg />}></Route>
            <Route path="/strategy" element={<Strategy />}></Route>
            <Route path="/gas" element={<Gas />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
