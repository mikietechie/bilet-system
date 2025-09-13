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
import { Question, List, ListsApi } from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import { useParams } from "react-router";
import { BookmarkButton } from "../components/BookmarkButton";

const ListPage: React.FC = () => {
  const { listId } = useParams<{ listId: string }>();
  const [list, setList] = useState<List>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const apiCtx = useContext(ApiCtx);
  const listsApi = useMemo(() => new ListsApi(apiCtx?.configuration), [apiCtx]);

  const loaddata = useCallback(() => {
    listsApi
      .listsControllerFindOne(parseInt(listId))
      .then((res) => setList(res.data));
    listsApi
      .listsControllerFindAllQuestions(parseInt(listId))
      .then((res) => setQuestions(res.data));
  }, [listsApi, listId]);

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
          <IonTitle>{list?.name}</IonTitle>
          <IonButtons slot="end">
            <BookmarkButton entity="list" eid={parseInt(listId)} name={list?.name} key="" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonListHeader>Questions</IonListHeader>
          {questions.map((question, index) => (
            <IonItem key={index}>
              <IonLabel>{question.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListPage;
