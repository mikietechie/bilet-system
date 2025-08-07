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
  AddGroupUserDto,
  Group,
  GroupMembersResponseItemDto,
  GroupsApi,
  GroupUser,
  GroupUsersResponseItemDto,
  UpdateGroupDto,
  UpdateGroupMemberDto,
  UpdateGroupUserDto,
} from "../api-client";
import { IonRefresherCustomEvent } from "@ionic/core";
import { useParams } from "react-router";
import {
  addOutline,
  addSharp,
  checkboxOutline,
  checkboxSharp,
  checkmarkDoneOutline,
  checkmarkDoneSharp,
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

export type GroupUsersListProps = {
  groupId: number;
};

const GroupUsersList: React.FC<GroupUsersListProps> = ({ groupId }) => {
  // Ionic Hooks
  const [presentAlert] = useIonAlert();
  // Contexts
  const apiCtx = useContext(ApiCtx);
  // State
  const [updateGroupModalIsOpen, setUpdateGroupModalIsOpen] = useState(false);
  const [addMemberModalIsOpen, setAddMemberModalIsOpen] = useState(false);
  const [group, setGroup] = useState<Group>();
  const [groupMembers, setGroupMembers] = useState<
    GroupMembersResponseItemDto[]
  >([]);
  const [groupUsers, setGroupUsers] = useState<GroupUsersResponseItemDto[]>([]);
  const [selectedMember, setSelectedMember] =
    useState<GroupMembersResponseItemDto>();
  // Refs
  const updateGroupNameRef = useRef<HTMLIonInputElement>(null);
  const updateGroupIsPublicRef = useRef<HTMLIonCheckboxElement>(null);
  const updateGroupMembersNeedActivationRef =
    useRef<HTMLIonCheckboxElement>(null);

  const newUserEmailRef = useRef<HTMLIonInputElement>(null);

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
    groupsApi
      .groupsControllerFindUsersByGroup(groupId)
      .then((res) => setGroupUsers(res.data));
  }, [groupsApi, groupId]);

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  const onSubmitAddNewUserForm = (event: FormEvent) => {
    event.preventDefault();
    const data: AddGroupUserDto = {
      email: (newUserEmailRef.current?.value as string) || "",
    };
    groupsApi
      .groupsControllerAddUser(group!.id, data)
      .then(() => {
        loaddata();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
    return false;
  };

  const onUpdateUser = (groupUser: GroupUsersResponseItemDto) => {
    const data: UpdateGroupUserDto = {
      isActive: !groupUser.isActive,
    };
    groupsApi
      .groupsControllerUpdateUser(group!.id, groupUser!.id, data)
      .then(() => {
        loaddata();
      })
      .catch((err: AxiosError) =>
        presentAlert({ header: `Error`, message: fmtAxiosError(err) })
      );
  };

  const onRemoveGroupUser = (groupUser: GroupUsersResponseItemDto) => {
    groupsApi
      .groupsControllerRemoveUser(groupId, groupUser.id)
      .then(() => {
        loaddata();
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
    <IonList>
      <IonListHeader>
        Users <IonBadge>{groupUsers.length}</IonBadge>
      </IonListHeader>
      {groupUsers.map((groupUser, index) => (
        <IonItem key={index}>
          <IonLabel>{groupUser.userEmail}</IonLabel>
          <IonButtons slot="end">
            <IonButton onClick={() => onRemoveGroupUser(groupUser)}>
              <IonIcon slot="icon-only" ios={trashOutline} md={trashSharp} />
            </IonButton>
            <IonButton onClick={() => onUpdateUser(groupUser)}>
              {groupUser.isActive ? (
                <IonIcon
                  slot="icon-only"
                  ios={checkboxOutline}
                  md={checkboxSharp}
                />
              ) : (
                <IonIcon
                  slot="icon-only"
                  ios={checkmarkDoneOutline}
                  md={checkmarkDoneSharp}
                />
              )}
            </IonButton>
          </IonButtons>
        </IonItem>
      ))}
      <IonListHeader>Add User</IonListHeader>
      <IonItem>
        <IonInput
          ref={newUserEmailRef}
          // label="User Email"
          placeholder="Enter user email"
          labelPlacement="floating"
        />
        <IonButtons slot="end">
          <IonButton onClick={onSubmitAddNewUserForm}>
            <IonIcon ios={addOutline} md={addSharp} slot="start" /> Add
          </IonButton>
        </IonButtons>
      </IonItem>
    </IonList>
  );
};

export default GroupUsersList;
