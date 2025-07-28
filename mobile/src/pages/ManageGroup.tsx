import {
  IonAvatar,
  IonBadge,
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
  IonNote,
  IonPage,
  IonRefresher,
  IonRefresherContent,
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
  AddGroupMemberDto,
  Group,
  GroupMembersResponseItemDto,
  GroupsApi,
  UpdateGroupDto,
  UpdateGroupMemberDto,
} from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import { useParams } from "react-router";
import {
  addOutline,
  addSharp,
  closeOutline,
  closeSharp,
  pencilOutline,
  pencilSharp,
  shieldCheckmarkOutline,
  shieldCheckmarkSharp,
  trashOutline,
  trashSharp,
} from "ionicons/icons";
import { AxiosError } from "axios";
import { fmtAxiosError } from "../utils/error-fmt";

const ManageGroup: React.FC = () => {
  // Ionic Hooks
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();
  const { groupId } = useParams<{ groupId: string }>();
  // Contexts
  const apiCtx = useContext(ApiCtx);
  // State
  const [updateGroupModalIsOpen, setUpdateGroupModalIsOpen] = useState(false);
  const [addMemberModalIsOpen, setAddMemberModalIsOpen] = useState(false);
  const [group, setGroup] = useState<Group>();
  const [groupMembers, setGroupMembers] = useState<
    GroupMembersResponseItemDto[]
  >([]);
  const [selectedMember, setSelectedMember] =
    useState<GroupMembersResponseItemDto>();
  // Refs
  const updateGroupNameRef = useRef<HTMLIonInputElement>(null);
  const updateGroupIsPublicRef = useRef<HTMLIonCheckboxElement>(null);
  const updateGroupMembersNeedActivationRef =
    useRef<HTMLIonCheckboxElement>(null);

  const newMemberEmailRef = useRef<HTMLIonInputElement>(null);
  const newMemberIsAdminRef = useRef<HTMLIonCheckboxElement>(null);

  const selectedMemberIsAdminRef = useRef<HTMLIonToggleElement>(null);
  const selectedMemberIsActiveRef = useRef<HTMLIonToggleElement>(null);
  // constants
  const groupsApi = useMemo(
    () => new GroupsApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    const _groupId = parseInt(groupId);
    groupsApi
      .groupsControllerFindOne(_groupId)
      .then((res) => setGroup(res.data));
    groupsApi
      .groupsControllerReadMembers(_groupId)
      .then((res) => setGroupMembers(res.data));
  }, [groupsApi, groupId]);

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  const onSubmitAddNewMemberForm = (event: FormEvent) => {
    event.preventDefault();
    const data: AddGroupMemberDto = {
      isAdmin: newMemberIsAdminRef.current?.checked || false,
      email: (newMemberEmailRef.current?.value as string) || "",
    };
    groupsApi
      .groupsControllerAddMember(group!.id, data)
      .then(() => {
        // newMemberEmailRef.current?.;
        setAddMemberModalIsOpen(false);
        loaddata();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

  const onSubmitUpdateMemberForm = (event: FormEvent) => {
    event.preventDefault();
    const data: UpdateGroupMemberDto = {
      isAdmin: selectedMemberIsAdminRef.current?.checked || false,
      isActive: selectedMemberIsActiveRef.current?.checked || false,
    };
    groupsApi
      .groupsControllerUpdateMember(group!.id, selectedMember!.id, data)
      .then(() => {
        // newMemberEmailRef.current?.;
        setSelectedMember(undefined);
        loaddata();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

  const onSubmitUpdateGroupForm = (event: FormEvent) => {
    event.preventDefault();
    const data: UpdateGroupDto = {
      name: (updateGroupNameRef.current?.value as string) || ``,
      isPublic: updateGroupIsPublicRef.current?.checked || false,
      membersNeedActivation:
        updateGroupMembersNeedActivationRef.current?.checked || false,
    };
    groupsApi
      .groupsControllerUpdate(group!.id, data)
      .then(() => {
        setUpdateGroupModalIsOpen(false);
        loaddata();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

  const onDeleteGroup = () => {
    groupsApi
      .groupsControllerRemove(group!.id)
      .then(() => {
        setUpdateGroupModalIsOpen(false);
        router.push("/manage-groups", "root", "push");
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
  };

  const onRemoveGroupMember = () => {
    groupsApi
      .groupsControllerRemoveMember(selectedMember!.id, group!.id)
      .then(() => {
        setSelectedMember(undefined);
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
          <IonTitle>Group: {group?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setUpdateGroupModalIsOpen(true)}>
              <IonIcon slot="icon-only" md={pencilSharp} ios={pencilOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonItem>
          <IonLabel>
            <p>Name</p>
            <h2>{group?.name}</h2>
          </IonLabel>
        </IonItem>
        <IonList>
          <IonListHeader>
            <IonLabel>
              Members <IonBadge>{groupMembers.length} members</IonBadge>
            </IonLabel>
          </IonListHeader>
          {groupMembers.map((groupMember, index) => (
            <IonItem
              key={index}
              onClick={() => setSelectedMember(groupMember)}
              button={true}
            >
              <IonAvatar slot="start" color="primary">
                <img
                  alt="Initials"
                  src={`https://ui-avatars.com/api/?name=${groupMember.userName}&background=random&bold=true`}
                />
              </IonAvatar>
              <IonLabel>
                <h2>{groupMember.userName}</h2>
                <p>{groupMember.userEmail}</p>
              </IonLabel>
              {groupMember.isAdmin ? (
                <IonNote slot="end">Admin</IonNote>
              ) : undefined}
              {groupMember.isActive ? undefined : (
                <IonBadge color="warning" slot="end">
                  Inactive
                </IonBadge>
              )}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton onClick={() => setAddMemberModalIsOpen(true)}>
          <IonIcon md={addSharp} ios={addOutline}></IonIcon>
        </IonFabButton>
        {/*
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
        */}
      </IonFab>
      <IonModal isOpen={updateGroupModalIsOpen}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setUpdateGroupModalIsOpen(false)}>
                <IonIcon md={closeSharp} ios={closeOutline} slot="start" />
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>Update group</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={onSubmitUpdateGroupForm}>
            <IonList>
              <IonItem>
                <IonInput
                  label="Group name"
                  placeholder="Enter group name"
                  labelPlacement="floating"
                  ref={updateGroupNameRef}
                  value={group?.name}
                />
              </IonItem>
              <IonItem>
                <IonCheckbox
                  ref={updateGroupIsPublicRef}
                  labelPlacement="end"
                  checked={group?.isPublic}
                >
                  Is Public
                </IonCheckbox>
              </IonItem>
              <IonItem>
                <IonCheckbox
                  ref={updateGroupMembersNeedActivationRef}
                  labelPlacement="end"
                  checked={group?.membersNeedActivation}
                >
                  Strict Activation
                </IonCheckbox>
              </IonItem>
            </IonList>
            <div className="ion-padding">
              <IonButton type="submit" expand="block">
                <IonIcon slot="start" md={pencilSharp} ios={pencilOutline} />
                Update
              </IonButton>
            </div>
          </form>
          <div className="ion-padding ion-margin-top">
            <IonButton
              expand="block"
              color="danger"
              fill="clear"
              onClick={onDeleteGroup}
            >
              <IonIcon slot="start" md={trashSharp} ios={trashOutline} />
              Delete Group
            </IonButton>
          </div>
        </IonContent>
      </IonModal>
      <IonModal isOpen={addMemberModalIsOpen}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setAddMemberModalIsOpen(false)}>
                <IonIcon md={closeSharp} ios={closeOutline} slot="start" />
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>Add member</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={onSubmitAddNewMemberForm}>
            <IonList>
              <IonItem>
                <IonInput
                  label="Member Email"
                  placeholder="Enter new member email"
                  labelPlacement="floating"
                  ref={newMemberEmailRef}
                  type="email"
                />
              </IonItem>
              <IonItem>
                <IonCheckbox ref={newMemberIsAdminRef} labelPlacement="end">
                  Is Admin
                </IonCheckbox>
              </IonItem>
            </IonList>
            <div className="ion-padding">
              <IonButton type="submit" expand="block">
                <IonIcon slot="start" md={addSharp} ios={addOutline} />
                Add
              </IonButton>
            </div>
          </form>
        </IonContent>
      </IonModal>
      <IonModal isOpen={selectedMember !== undefined}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setSelectedMember(undefined)}>
                <IonIcon md={closeSharp} ios={closeOutline} slot="start" />
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>Group Member Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonLabel>
                <p>Member's name</p>
                <h2>{selectedMember?.userName}</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <p>Member's Email</p>
                <h2>{selectedMember?.userEmail}</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <p>Membership ID</p>
                <h2>{selectedMember?.id}</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <p>User ID</p>
                <h2>{selectedMember?.userId}</h2>
              </IonLabel>
            </IonItem>
          </IonList>
          <form onSubmit={onSubmitUpdateMemberForm}>
            <IonList>
              <IonListHeader>Update member</IonListHeader>
              <IonItem>
                <IonToggle
                  checked={selectedMember?.isAdmin}
                  labelPlacement="end"
                  ref={selectedMemberIsAdminRef}
                >
                  Is Admin
                </IonToggle>
              </IonItem>
              <IonItem>
                <IonToggle
                  checked={selectedMember?.isActive}
                  labelPlacement="end"
                  ref={selectedMemberIsActiveRef}
                >
                  Is Active
                </IonToggle>
              </IonItem>
            </IonList>
            <div className="ion-padding ion-margin-top">
              <IonButton
                type="submit"
                expand="block"
                color="primary"
                fill="solid"
              >
                <IonIcon
                  slot="start"
                  md={shieldCheckmarkSharp}
                  ios={shieldCheckmarkOutline}
                />
                Update
              </IonButton>
            </div>
          </form>
          <div className="ion-padding ion-margin-top">
            <IonButton
              expand="block"
              color="danger"
              fill="clear"
              onClick={onRemoveGroupMember}
            >
              <IonIcon slot="start" md={trashSharp} ios={trashOutline} />
              Remove
            </IonButton>
          </div>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default ManageGroup;
