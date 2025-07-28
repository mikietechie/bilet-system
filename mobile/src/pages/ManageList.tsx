import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonModal,
  IonNote,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
  RefresherEventDetail,
  useIonAlert,
  useIonRouter,
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
  CreateQuestionDto,
  List,
  ListsApi,
  Question,
  QuestionsApi,
  UpdateListDto,
  UpdateQuestionDto,
} from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import { useParams } from "react-router";
import {
  addOutline,
  addSharp,
  closeOutline,
  closeSharp,
  colorWandOutline,
  colorWandSharp,
  ellipsisVerticalOutline,
  ellipsisVerticalSharp,
  hammerOutline,
  hammerSharp,
  listCircleOutline,
  listCircleSharp,
  listOutline,
  listSharp,
  pencilOutline,
  pencilSharp,
  saveOutline,
  saveSharp,
  shieldCheckmarkOutline,
  shieldCheckmarkSharp,
  trashOutline,
  trashSharp,
} from "ionicons/icons";
import { AxiosError } from "axios";
import { fmtAxiosError } from "../utils/error-fmt";
import { getInputRefValue } from "../utils/input-ref";

const ManageList: React.FC = () => {
  // Ionic Hooks
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();
  const { listId } = useParams<{ listId: string }>();
  // Contexts
  const apiCtx = useContext(ApiCtx);
  // State
  const [updateListModalIsOpen, setUpdateListModalIsOpen] = useState(false);
  const [addQuestionModalIsOpen, setAddQuestionModalIsOpen] = useState(false);
  const [list, setList] = useState<List>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question>();
  // Refs
  const updateListNameRef = useRef<HTMLIonInputElement>(null);
  const updateListIsPublicRef = useRef<HTMLIonCheckboxElement>(null);
  // const updateQuestionsRef = useRef<HTMLIonCheckboxElement>(null);

  const newQuestionFormRef = useRef<HTMLFormElement>(null);
  const newQuestionTitleRef = useRef<HTMLIonInputElement>(null);
  const newQuestionDescriptionRef = useRef<HTMLIonTextareaElement>(null);
  // constants
  const listsApi = useMemo(() => new ListsApi(apiCtx?.configuration), [apiCtx]);
  const questionsApi = useMemo(
    () => new QuestionsApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    const _listId = parseInt(listId);
    listsApi.listsControllerFindOne(_listId).then((res) => setList(res.data));
    listsApi
      .listsControllerFindAllQuestions(_listId)
      .then((res) => setQuestions(res.data));
  }, [listsApi, listId]);

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  const onSubmitAddNewQuestionForm = (event: FormEvent) => {
    event.preventDefault();
    const data: CreateQuestionDto = {
      title: getInputRefValue(newQuestionTitleRef),
      description: getInputRefValue(newQuestionDescriptionRef),
      listid: parseInt(listId),
    };
    questionsApi
      .questionsControllerCreate(data)
      .then(() => {
        // newQuestionEmailRef.current?.;
        setAddQuestionModalIsOpen(false);
        loaddata();
        newQuestionFormRef.current?.reset();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

  const onSubmitUpdateListForm = (event: FormEvent) => {
    event.preventDefault();
    const data: UpdateListDto = {
      name: (updateListNameRef.current?.value as string) || ``,
    };
    listsApi
      .listsControllerUpdate(list!.id, data)
      .then(() => {
        setUpdateListModalIsOpen(false);
        loaddata();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

  const onDeleteList = () => {
    listsApi
      .listsControllerRemove(list!.id)
      .then(() => {
        setUpdateListModalIsOpen(false);
        router.push("/manage-lists", "root", "replace");
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
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
          <IonTitle>List: {list?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setUpdateListModalIsOpen(true)}>
              <IonIcon slot="icon-only" md={pencilSharp} ios={pencilOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonTabs>
          <IonTab tab="questions" title="Questions">
            <IonContent>
              <IonCard>
                <IonCardHeader>
                  <IonTitle>
                    Add Question <IonBadge>{questions.length + 1}</IonBadge>
                  </IonTitle>
                </IonCardHeader>
                <IonCardContent>
                  <form
                    onSubmit={onSubmitAddNewQuestionForm}
                    ref={newQuestionFormRef}
                  >
                    <IonList>
                      <IonItem>
                        <IonInput
                          label="Question"
                          placeholder="Enter question"
                          labelPlacement="floating"
                          ref={newQuestionTitleRef}
                          type="text"
                        />
                      </IonItem>
                      {/* <IonItem>
                  <IonTextarea
                    label="Question details"
                    placeholder="Question details"
                    labelPlacement="floating"
                    ref={newQuestionDescriptionRef}
                  ></IonTextarea>
                </IonItem> */}
                    </IonList>
                    <div className="ion-padding">
                      <IonButton type="submit" expand="block">
                        <IonIcon slot="start" md={addSharp} ios={addOutline} />
                        Save
                      </IonButton>
                    </div>
                  </form>
                </IonCardContent>
              </IonCard>
              {questions.map((question, index) => (
                <QuestionCard
                  key={index}
                  question={question}
                  onUpdate={loaddata}
                />
              ))}
            </IonContent>
          </IonTab>
          <IonTab tab="tickets" title="Tickets">
            <IonContent>
              <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton>
                  <IonIcon
                    ios={ellipsisVerticalOutline}
                    md={ellipsisVerticalSharp}
                  ></IonIcon>
                </IonFabButton>
                <IonFabList side="top">
                  <IonFabButton>
                    <IonIcon ios={addOutline} md={addSharp}></IonIcon>
                  </IonFabButton>
                  <IonFabButton>
                    <IonIcon
                      icon={colorWandOutline}
                      md={colorWandSharp}
                    ></IonIcon>
                  </IonFabButton>
                </IonFabList>
              </IonFab>
            </IonContent>
          </IonTab>
          <IonTabBar slot="bottom">
            <IonTabButton tab="questions">
              <IonIcon ios={listOutline} md={listSharp} />
              Questions
            </IonTabButton>
            <IonTabButton tab="tickets">
              <IonIcon ios={listCircleOutline} md={listCircleSharp} />
              Tickets
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>

      <IonModal isOpen={list && updateListModalIsOpen}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setUpdateListModalIsOpen(false)}>
                <IonIcon md={closeSharp} ios={closeOutline} slot="start" />
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>Update list</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={onSubmitUpdateListForm}>
            <IonList>
              <IonItem>
                <IonInput
                  label="List title"
                  placeholder="Enter list title"
                  labelPlacement="floating"
                  ref={updateListNameRef}
                  value={list?.name}
                />
              </IonItem>
            </IonList>
            <div className="ion-padding">
              <IonButton type="submit" expand="block">
                <IonIcon slot="start" md={saveSharp} ios={saveOutline} />
                Update
              </IonButton>
            </div>
          </form>
          <div className="ion-padding ion-margin-top">
            <IonButton
              expand="block"
              color="danger"
              fill="clear"
              onClick={onDeleteList}
            >
              <IonIcon slot="start" md={trashSharp} ios={trashOutline} />
              Delete List
            </IonButton>
          </div>
        </IonContent>
      </IonModal>
      {/* <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton onClick={() => setAddQuestionModalIsOpen(true)}>
          <IonIcon md={addSharp} ios={addOutline}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={document}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={colorPalette}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={globe}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab> */}
    </IonPage>
  );
};

const QuestionCard: React.FC<{
  question: Question;
  onUpdate: (questionId?: number) => Promise<void>;
}> = ({ question, onUpdate }) => {
  const apiCtx = useContext(ApiCtx);
  const questionsApi = useMemo(
    () => new QuestionsApi(apiCtx?.configuration),
    [apiCtx]
  );
  const [presentAlert] = useIonAlert();

  const questionTitleRef = useRef<HTMLIonInputElement>(null);
  const questionDescriptionRef = useRef<HTMLIonTextareaElement>(null);

  const onSubmitUpdateQuestionForm = (event: FormEvent) => {
    event.preventDefault();
    const data: UpdateQuestionDto = {
      title: getInputRefValue(questionTitleRef),
      description: getInputRefValue(questionDescriptionRef),
    };
    questionsApi
      .questionsControllerUpdate(question.id, data)
      .then(() => {
        onUpdate();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

  const onRemoveQuestion = () => {
    questionsApi
      .questionsControllerRemove(question.id)
      .then(async () => {
        await onUpdate();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
  };

  return (
    <IonCard>
      {/* <IonCardHeader>
            <IonTitle>Add Question</IonTitle>
          </IonCardHeader> */}
      <IonCardContent>
        <form onSubmit={onSubmitUpdateQuestionForm}>
          <IonList>
            <IonItem>
              <IonInput
                label="Question"
                placeholder="Enter question"
                labelPlacement="floating"
                ref={questionTitleRef}
                value={question.title}
                type="text"
              />
            </IonItem>
            <IonItem>
              <IonTextarea
                label="Question details"
                placeholder="Question details"
                labelPlacement="floating"
                ref={questionDescriptionRef}
                value={question.description}
              ></IonTextarea>
            </IonItem>
          </IonList>
          <div className="ion-padding">
            <IonButton
              type="button"
              color="secondary"
              onClick={onRemoveQuestion}
            >
              <IonIcon slot="start" md={trashSharp} ios={trashOutline} />
              Remove
            </IonButton>
            <IonButton type="submit">
              <IonIcon slot="start" md={saveSharp} ios={saveOutline} />
              Save
            </IonButton>
          </div>
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default ManageList;
