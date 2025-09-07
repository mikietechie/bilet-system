import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
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
import { List, Subject, SubjectsApi } from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import { useParams } from "react-router";

const SubjectPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<Subject>();
  const [lists, setLists] = useState<List[]>([]);
  const apiCtx = useContext(ApiCtx);
  const subjectsApi = useMemo(
    () => new SubjectsApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    subjectsApi
      .subjectsControllerFindOne(parseInt(subjectId))
      .then((res) => setSubject(res.data));
    subjectsApi
      .subjectsControllerFindListsBySubject(parseInt(subjectId))
      .then((res) => setLists(res.data));
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
          <IonTitle>
            {subject?.name} - {subject?.level}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonListHeader>Lists</IonListHeader>
          {lists.map((list, index) => (
            <IonItem key={index} routerLink={`/list/${list.id}`}>
              <IonLabel>{list.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SubjectPage;
