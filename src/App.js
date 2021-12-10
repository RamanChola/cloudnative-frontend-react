import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useAuth } from "./hooks/auth-hook";
import { AuthContext } from "./pages/Auth/auth-context";
import Auth from "./pages/Auth/Auth";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SignIn from "./pages/Auth/components/SignIn";
import Signup from "./pages/Auth/components/Signup";
import Chat from "./pages/Chat";

const Homepage = React.lazy(() => import("./pages/Homepage"));
const queryClient = new QueryClient();
function App() {
  const { isLoggedIn, token, login, logout, userId, username } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          token: token,
          login: login,
          logout: logout,
          username: username,
        }}
      >
        <Router>
          <Suspense
            fallback={
              <div>
                <LinearProgress color="secondary" />
              </div>
            }
          >
            <Switch>
              <Route exact path="/">
                {isLoggedIn ? <Homepage /> : <Redirect to="/register" />}
              </Route>
              <Route path="/register">
                {!isLoggedIn ? <Auth /> : <Redirect to="/" />}
              </Route>
              {isLoggedIn && (
                <Route path="/chat/">
                  <Chat />
                </Route>
              )}
              {/* {isLoggedIn && (
                <Route path="/somepath/">
                  <SomeComponent />
                </Route>
              )} */}
            </Switch>
          </Suspense>
        </Router>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
