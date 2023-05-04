import { TabsMenu } from "modules/AdvancedSongInfo/components/TabsMenu";
import { RxReset } from "react-icons/rx";
import { Navigate } from "react-router-dom";

const Details = () => {
  const TABS_ARRAY = [{ label: <RxReset />, component: <Navigate to={-1} /> }];

  return <TabsMenu tabsArray={TABS_ARRAY} />;
};

export { Details };
