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
  useIonAlert,
} from "@ionic/react";
import "./Page.css";
import {
  idCardOutline,
  keyOutline,
  logInOutline,
  mailOutline,
} from "ionicons/icons";
import { FormEvent, useContext, useRef, useState } from "react";
import { AuthApi, LoginDto, RegisterDto } from "../api-client";
import { ApiCtx, getDefaultConfiguration } from "../contexts/api-context";

const AuthPage: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [action, setAction] = useState<"login" | "register">("login");
  const [recoverModalIsOpen, setRecoverModalIsOpen] = useState(false);
  const nameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const apiCtx = useContext(ApiCtx);
  const authApi = new AuthApi(apiCtx?.configuration);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
      password: passwordRef.current?.value,
    } as RegisterDto;
    try {
      if (action === "register") {
        await register(formData);
      } else {
        await login(formData);
      }
    } catch (error) {
      await presentAlert({ message: `${error}`, header: "Error" });
    }
    return false;
  };

  const onSubmitRecoverForm = (e: FormEvent) => {
    e.preventDefault();
    alert("not implemented");
    return false;
  };

  const login = async (formData: LoginDto) => {
    const res = await authApi.authControllerLogin(formData);
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const configuration = getDefaultConfiguration();
    configuration.accessToken = res.data.accessToken;
    console.log("configuration set");
    apiCtx?.setConfiguration(configuration);
  };

  const register = async (formData: RegisterDto) => {
    const res = await authApi.authControllerRegister(formData);
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    await presentAlert({
      header: `Success`,
      message: `Successfully registered, logging in!`,
    });
    await login(formData);
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
                    ref={emailRef}
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
                            ref={nameRef}
                          />
                          <IonIcon slot="start" icon={idCardOutline} />
                        </IonItem>
                      ) : undefined}
                      <IonItem>
                        <IonInput
                          label="Email"
                          labelPlacement="floating"
                          type="email"
                          ref={emailRef}
                        />
                        <IonIcon slot="start" icon={mailOutline} />
                      </IonItem>
                      <IonItem>
                        <IonInput
                          label="Password"
                          labelPlacement="floating"
                          type="password"
                          ref={passwordRef}
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
