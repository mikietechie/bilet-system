import {
  IonButton,
  IonButtons,
  IonCheckbox,
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
import { CreateGroupDto, Group, GroupsApi } from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import {
  addOutline,
  addSharp,
  bookOutline,
  bookSharp,
  closeOutline,
  closeSharp,
} from "ionicons/icons";
import { AxiosError } from "axios";
import { fmtAxiosError } from "../utils/error-fmt";

const ManageGroups: React.FC = () => {
  const [createGroupModalIsOpen, setCreateGroupModalIsOpen] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [presentAlert] = useIonAlert();

  const createGroupNameRef = useRef<HTMLIonInputElement>(null);
  const createGroupIsPublicRef = useRef<HTMLIonCheckboxElement>(null);
  const createGroupMembersNeedActivationRef =
    useRef<HTMLIonCheckboxElement>(null);
  const apiCtx = useContext(ApiCtx);
  const groupsApi = useMemo(
    () => new GroupsApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    console.log(groupsApi);
    groupsApi
      .groupsControllerFindAllGroupsByOwner()
      .then((res) => setGroups(res.data));
  }, [groupsApi]);

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  const onSubmitCreateGroupForm = (event: FormEvent) => {
    event.preventDefault();
    const data: CreateGroupDto = {
      name: (createGroupNameRef.current?.value as string) || ``,
      isPublic: createGroupIsPublicRef.current?.checked || false,
      membersNeedActivation:
        createGroupMembersNeedActivationRef.current?.checked || false,
    };
    groupsApi
      .groupsControllerCreate(data)
      .then(() => {
        setCreateGroupModalIsOpen(false);
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
          <IonTitle>Manage Groups</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonListHeader>Groups you own</IonListHeader>
          {groups.map((group, index) => (
            <IonItem
              key={index}
              routerLink={`/manage-group/${group.id}`}
              type="button"
            >
              <IonIcon slot="start" ios={bookOutline} md={bookSharp} />
              <IonLabel>{group.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={() => setCreateGroupModalIsOpen(true)}>
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
      <IonModal isOpen={createGroupModalIsOpen}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setCreateGroupModalIsOpen(false)}>
                <IonIcon md={closeSharp} ios={closeOutline} slot="start" />
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>Create Group</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={onSubmitCreateGroupForm}>
            <IonList>
              <IonItem>
                <IonInput
                  label="Group name"
                  placeholder="Enter group name"
                  labelPlacement="floating"
                  ref={createGroupNameRef}
                />
              </IonItem>
              <IonItem>
                <IonCheckbox ref={createGroupIsPublicRef} labelPlacement="end">
                  Is Public
                </IonCheckbox>
              </IonItem>
              <IonItem>
                <IonCheckbox
                  ref={createGroupMembersNeedActivationRef}
                  labelPlacement="end"
                >
                  Strict Activation
                </IonCheckbox>
              </IonItem>
            </IonList>
            <div className="ion-padding">
              <IonButton type="submit" expand="block">
                <IonIcon slot="start" md={addSharp} ios={addOutline} />
                Update
              </IonButton>
            </div>
          </form>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default ManageGroups;
