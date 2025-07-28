import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import "./Page.css";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ApiCtx } from "../contexts/api-context";
import { Subject, SubjectsApi } from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import { bookOutline, bookSharp } from "ionicons/icons";

const SubjectsPage: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const apiCtx = useContext(ApiCtx);
  const subjectsApi = useMemo(
    () => new SubjectsApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    subjectsApi
      .subjectsControllerFindAll()
      .then((res) => setSubjects(res.data));
  }, [subjectsApi]);

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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Subjects</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          {subjects.map((subject, index) => (
            <IonItem key={index} routerLink={`/subject/${subject.id}`}>
              <IonIcon slot="start"  ios={bookOutline} md={bookSharp} />
              <IonLabel>{subject.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SubjectsPage;
