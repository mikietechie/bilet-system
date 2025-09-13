import { IonButton, IonIcon } from "@ionic/react";
import { bookmarkOutline, bookmarkSharp } from "ionicons/icons";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ApiCtx } from "../contexts/api-context";
import { Bookmark, BookmarksApi } from "../api-client";

export const BookmarkButton: React.FC<{
  entity: string;
  eid: number;
  name?: string;
  key?: string;
}> = ({ entity, eid, key, name }) => {
  const apiCtx = useContext(ApiCtx);
  const [bookmark, setBookmark] = useState<Bookmark>();
  const bookmarksApi = useMemo(
    () => new BookmarksApi(apiCtx?.configuration),
    [apiCtx]
  );

  const loaddata = useCallback(() => {
    bookmarksApi
      .bookmarksControllerFindOne(entity, eid)
      .then((res) => setBookmark(res.data))
      .catch(() => setBookmark(undefined));
  }, [bookmarksApi, entity, eid]);

  const onClick = () => {
    if (bookmark) {
      bookmarksApi.bookmarksControllerRemove(entity, eid).then(loaddata);
    } else {
      bookmarksApi
        .bookmarksControllerCreate({
          eid,
          entity,
          key: key || "",
          name: name || "",
        })
        .then(loaddata);
    }
  };

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  return (
    <IonButton color={bookmark ? "danger" : "dark"} onClick={onClick}>
      <IonIcon ios={bookmarkOutline} md={bookmarkSharp} slot="icon-only" />
    </IonButton>
  );
};
