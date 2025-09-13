import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonText,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonAlert,
} from "@ionic/react";
import "./Page.css";
import {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ApiCtx } from "../contexts/api-context";
import { BookmarksApi, Bookmark } from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import {
  listOutline,
  listSharp,
  searchOutline,
  searchSharp,
} from "ionicons/icons";

const HomePage: React.FC = () => {
  const apiCtx = useContext(ApiCtx);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [presentAlert] = useIonAlert();
  const bookmarksApi = useMemo(
    () => new BookmarksApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(async () => {
    try {
      const res = await bookmarksApi.bookmarksControllerFindAll();
      setBookmarks(res.data);
    } catch (error) {
      presentAlert("Error");
      console.log(error);
    }
  }, [bookmarksApi, presentAlert]);

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  const onRefresh = async (
    event: IonRefresherCustomEvent<RefresherEventDetail>
  ) => {
    try {
      await loaddata();
    } finally {
      event.detail.complete();
    }
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle> Hello, {apiCtx?.user?.name}</IonTitle>

          {/* <IonAvatar slot="end">
            <IonImg
              src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${apiCtx?.user?.name}`}
            ></IonImg>
          </IonAvatar> */}
        </IonToolbar>
        <IonToolbar>
          <form onSubmit={onSearch}>
            <IonItem>
              <IonIcon slot="start" ios={searchOutline} md={searchSharp} />
              <IonInput placeholder="Search people" />
            </IonItem>
          </form>
          {/* <IonSearchbar placeholder="Search People"  /> */}
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonListHeader>Bookmarks</IonListHeader>
          {bookmarks.map((list, index) => (
            <IonItem
              key={index}
              routerLink={`/manage-list/${list.id}`}
              type="button"
            >
              <IonIcon slot="start" ios={listOutline} md={listSharp} />

              <IonText>
                <IonLabel>{list.name}</IonLabel>
              </IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
