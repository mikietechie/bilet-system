import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  IonInputCustomEvent,
  InputInputEventDetail,
} from "@ionic/core/components";
import "./Page.css";
import {
  idCardOutline,
  keyOutline,
  logInOutline,
  mailOutline,
} from "ionicons/icons";
import { FormEvent, useContext, useState } from "react";
import { AuthApi, RegisterDto } from "../api-client";
import { ApiCtx } from "../contexts/api-context";

const AuthPage: React.FC = () => {
  const [action, setAction] = useState<"login" | "register">("login");
  const [recoverModalIsOpen, setRecoverModalIsOpen] = useState(false);
  const [formData, setFormData] = useState<RegisterDto>({
    email: "",
    name: "",
    password: "",
  });
  const apiCtx = useContext(ApiCtx);
  const authApi = new AuthApi(apiCtx?.configuration);

  const onChange = (e: IonInputCustomEvent<InputInputEventDetail>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await authApi.authControllerLogin(formData);
      const configuration = apiCtx!.configuration;
      configuration.accessToken = res.data.accessToken;
      apiCtx?.setConfiguration(configuration);
      apiCtx?.setUser(true)
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const onSubmitRecoverForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    return false;
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonModal isOpen={recoverModalIsOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Recover Account</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setRecoverModalIsOpen(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <form onSubmit={onSubmitRecoverForm}>
              <IonList>
                <IonItem>
                  <IonInput
                    label="Email"
                    labelPlacement="floating"
                    type="email"
                    name="name"
                    onIonInput={onChange}
                  />
                  <IonIcon slot="start" icon={mailOutline} />
                </IonItem>
                <div className="ion-padding ion-margin-bottom">
                  <IonButton expand="block" type="submit">
                    <IonIcon slot="start" icon={logInOutline} />
                    Recover Account
                  </IonButton>
                </div>
              </IonList>
            </form>
          </IonContent>
        </IonModal>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-margin-top" sizeMd="6" sizeLg="5" pushLg="3">
              <IonCard className="ionp">
                <IonCardHeader>
                  <IonCardTitle>Login</IonCardTitle>
                  <IonCardSubtitle>Please enter your details</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <form onSubmit={onSubmit}>
                    <IonList>
                      {action === "register" ? (
                        <IonItem>
                          <IonInput
                            label="Full name"
                            labelPlacement="floating"
                            type="text"
                            name="name"
                            onIonInput={onChange}
                          />
                          <IonIcon slot="start" icon={idCardOutline} />
                        </IonItem>
                      ) : undefined}
                      <IonItem>
                        <IonInput
                          label="Email"
                          labelPlacement="floating"
                          type="email"
                          name="email"
                          onIonInput={onChange}
                        />
                        <IonIcon slot="start" icon={mailOutline} />
                      </IonItem>
                      <IonItem>
                        <IonInput
                          label="Password"
                          labelPlacement="floating"
                          type="password"
                          name="password"
                          onIonInput={onChange}
                        />
                        <IonIcon slot="start" icon={keyOutline} />
                      </IonItem>
                      <div className="ion-padding ion-margin-bottom">
                        <IonButton expand="block" type="submit">
                          <IonIcon slot="start" icon={logInOutline} />
                          {action.toWellFormed()}
                        </IonButton>
                      </div>
                      <IonItem>
                        <IonCheckbox
                          onIonChange={(e) =>
                            e.target.checked
                              ? setAction("register")
                              : setAction("login")
                          }
                        >
                          Register new account
                        </IonCheckbox>
                      </IonItem>
                      <IonItem lines="none">
                        <IonButton
                          fill="clear"
                          onClick={() => setRecoverModalIsOpen(true)}
                        >
                          Forgot credentials? Recover account
                        </IonButton>
                      </IonItem>
                    </IonList>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AuthPage;
