import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NewUserAccount from './pages/register/NewUserAccount';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
//NewUserAccount
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              path="register"
              element={
                <NewUserAccount
                  inputs={userInputs}
                  title="Register New Account"
                />
              }
            />

            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />

              {/* <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>

            <Route path="products">
              {/* <Route index element={<List />} /> */}
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List />
                  </ProtectedRoute>
                }
              />
              {/* <Route path=":productId" element={<Single />} /> */}
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />

              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}

              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={productInputs} title="Add New Product" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
