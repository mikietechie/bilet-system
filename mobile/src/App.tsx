import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
  useIonAlert,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import AuthPage from "./pages/Auth";
import { useEffect, useState } from "react";
import { ApiCtx, getDefaultConfiguration } from "./contexts/api-context";
import SubjectsPage from "./pages/Subjects";
import SubjectPage from "./pages/Subject";
import { AuthApi, User } from "./api-client";
import ManageGroup from "./pages/ManageGroup";
import ManageGroups from "./pages/ManageGroups";
import ManageLists from "./pages/ManageLists";
import ManageList from "./pages/ManageList";
import ListPage from "./pages/List";
import HomePage from "./pages/Home";

setupIonicReact();

const App: React.FC = () => {
  const [configuration, setConfiguration] = useState(getDefaultConfiguration());
  const [user, setUser] = useState<User>();
  const [presentAlert] = useIonAlert();

  useEffect(() => {
    if (configuration.accessToken) {
      const authApi = new AuthApi(configuration);
      authApi
        .authControllerUser()
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data);
          } else {
            throw new Error(res.statusText);
          }
        })
        .catch((res) => {
          setUser(undefined);
          presentAlert({ header: `Error`, message: `${res}` });
        });
    } else {
      setUser(undefined);
    }
  }, [configuration, presentAlert]);

  return (
    <IonApp>
      <IonReactRouter>
        <ApiCtx value={{ configuration, setConfiguration, user, setUser }}>
          {!user ? (
            <AuthPage />
          ) : (
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route path="/" exact={true}>
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" exact={true}>
                  <HomePage />
                </Route>
                <Route path="/folder/:name" exact={true}>
                  <Page />
                </Route>
                <Route path="/subjects" exact={true}>
                  <SubjectsPage />
                </Route>
                <Route path="/subject/:subjectId" exact={true}>
                  <SubjectPage />
                </Route>
                <Route path="/list/:listId" exact={true}>
                  <ListPage />
                </Route>
                <Route path="/manage-groups" exact={true}>
                  <ManageGroups />
                </Route>
                <Route path="/manage-group/:groupId" exact={true}>
                  <ManageGroup />
                </Route>
                <Route path="/manage-lists" exact={true}>
                  <ManageLists />
                </Route>
                <Route path="/manage-list/:listId" exact={true}>
                  <ManageList />
                </Route>
              </IonRouterOutlet>
            </IonSplitPane>
          )}
        </ApiCtx>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
