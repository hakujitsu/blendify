import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LandingPage from "./UnauthenticatedApp/LandingPage";
import Callback from "./UnauthenticatedApp/Callback";
import AuthenticatedApp from "./AuthenticatedApp";
import {
  AuthContext,
  useAuthContext,
  useAuthContextProvider,
} from "./hooks/auth/useAuthContext";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import darkTheme from "./styles/theme"
import './App.css';
import Playlists from "./AuthenticatedApp/playlists";
import LikedSongsPage from "./AuthenticatedApp/likedSongs";
import PlaylistPage from "./AuthenticatedApp/playlist";
import HomePage from "./AuthenticatedApp/homePage";

const unauthenticatedRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<LandingPage />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/*" element={<LandingPage />} />
    </Route>
  )
);

const playerRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthenticatedApp />}>
      <Route path="/" element={<HomePage />} index />
      <Route path="playlists" element={<Playlists />} />
      <Route path="playlist/:playlistId" element={<PlaylistPage />} />
      <Route path="liked-songs" element={<LikedSongsPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Route>
  )
);


function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      {isLoggedIn() ? (
        <RouterProvider router={playerRouter} />
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
