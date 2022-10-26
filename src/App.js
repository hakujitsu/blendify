import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./UnauthenticatedApp/HomePage";
import Callback from "./UnauthenticatedApp/Callback";
import AuthenticatedApp from "./AuthenticatedApp";
import {
  AuthContext,
  useAuthContext,
  useAuthContextProvider,
} from "./hooks/useAuthContext";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import darkTheme from "./styles/theme"
import './App.css';

const unauthenticatedRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<Callback />} />
    </Route>
  )
);

const authenticatedRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<AuthenticatedApp />} />
      <Route path="/callback" element={<Callback />} />
    </Route>
  )
);


function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      {isLoggedIn() ? (
        <RouterProvider router={authenticatedRouter} />
      ) : (
        <RouterProvider router={unauthenticatedRouter} />
      )}
    </>
  );
}

const AppWrapper = () => {
  const authContextValue = useAuthContextProvider();

  return (
    <div className="App">
      <AuthContext.Provider value={authContextValue}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  );
};

export default AppWrapper;
