import {
  IonButtons,
  IonContent,
  IonHeader,
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
import { useParams } from "react-router";

const SubjectPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<Subject>();
  const apiCtx = useContext(ApiCtx);
  const subjectsApi = useMemo(
    () => new SubjectsApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    subjectsApi
      .subjectsControllerFindOne(parseInt(subjectId))
      .then((res) => setSubject(res.data));
  }, [subjectsApi, subjectId]);

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
          <IonTitle>{subject?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Details</h2>
              <p>
                {subject?.name} {subject?.level}
              </p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SubjectPage;
