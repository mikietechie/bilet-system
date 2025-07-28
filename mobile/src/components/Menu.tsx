import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  bookmarkOutline,
  bookOutline,
  bookSharp,
  listOutline,
  listSharp,
  logOutOutline,
  logOutSharp,
  settingsOutline,
  settingsSharp,
} from "ionicons/icons";
import "./Menu.css";
import { useContext } from "react";
import { ApiCtx, getDefaultConfiguration } from "../contexts/api-context";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Subjects",
    url: "/subjects",
    iosIcon: bookOutline,
    mdIcon: bookSharp,
  },
  {
    title: "Manage Groups",
    url: "/manage-groups",
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
  },
  {
    title: "Manage Lists",
    url: "/manage-lists",
    iosIcon: listOutline,
    mdIcon: listSharp,
  },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();
  const apiCtx = useContext(ApiCtx);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{apiCtx?.user?.name}</IonListHeader>
          <IonNote>{apiCtx?.user?.email}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonMenuToggle key={-1} autoHide={false}>
            <IonItem
              onClick={() =>
                apiCtx?.setConfiguration(getDefaultConfiguration())
              }
              lines="none"
              detail={false}
            >
              <IonIcon
                aria-hidden="true"
                slot="start"
                ios={logOutOutline}
                md={logOutSharp}
              />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
