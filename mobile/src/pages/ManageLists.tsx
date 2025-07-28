import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  IonSelectOption,
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
  useRef,
  useState,
} from "react";
import { ApiCtx } from "../contexts/api-context";
import {
  CreateListDto,
  List,
  ListsApi,
  Subject,
  SubjectsApi,
} from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import {
  addOutline,
  addSharp,
  closeOutline,
  closeSharp,
  listOutline,
  listSharp,
} from "ionicons/icons";
import { AxiosError } from "axios";
import { fmtAxiosError } from "../utils/error-fmt";
import { getInputRefValue } from "../utils/input-ref";

const ManageLists: React.FC = () => {
  const [createListModalIsOpen, setCreateListModalIsOpen] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [lists, setLists] = useState<List[]>([]);
  const [presentAlert] = useIonAlert();

  const createListNameRef = useRef<HTMLIonInputElement>(null);
  const createListSubjectIdRef = useRef<HTMLIonSelectElement>(null);
  const apiCtx = useContext(ApiCtx);
  const listsApi = useMemo(() => new ListsApi(apiCtx?.configuration), [apiCtx]);
  const subjectsApi = useMemo(
    () => new SubjectsApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    console.log(listsApi);
    listsApi
      .listsControllerFindAllListsByOwner()
      .then((res) => setLists(res.data));
    subjectsApi
      .subjectsControllerFindAll()
      .then((res) => setSubjects(res.data));
  }, [listsApi, subjectsApi]);

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  const onSubmitCreateListForm = (event: FormEvent) => {
    event.preventDefault();
    const data: CreateListDto = {
      name: getInputRefValue(createListNameRef),
      subjectId: getInputRefValue(createListSubjectIdRef),
    };
    listsApi
      .listsControllerCreate(data)
      .then(() => {
        setCreateListModalIsOpen(false);
        loaddata();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

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
          <IonTitle>Manage Lists</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonListHeader>Your Lists</IonListHeader>
          {lists.map((list, index) => (
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
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={() => setCreateListModalIsOpen(true)}>
            <IonIcon md={addSharp} ios={addOutline}></IonIcon>
          </IonFabButton>
          {/* <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList> */}
        </IonFab>
      </IonContent>
      <IonModal isOpen={createListModalIsOpen}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setCreateListModalIsOpen(false)}>
                <IonIcon md={closeSharp} ios={closeOutline} slot="start" />
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>Create List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={onSubmitCreateListForm}>
            <IonList>
              <IonItem>
                <IonInput
                  label="List name"
                  placeholder="Enter list name"
                  labelPlacement="floating"
                  ref={createListNameRef}
                />
              </IonItem>
              <IonItem>
                <IonSelect
                  label="Subject"
                  placeholder="Select subject"
                  labelPlacement="floating"
                  ref={createListSubjectIdRef}
                >
                  {subjects.map((subject, index) => (
                    <IonSelectOption key={index} value={subject.id}>
                      {subject.name}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            </IonList>
            <div className="ion-padding">
              <IonButton type="submit" expand="block">
                <IonIcon slot="start" md={addSharp} ios={addOutline} />
                Save
              </IonButton>
            </div>
          </form>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default ManageLists;
