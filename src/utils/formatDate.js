import moment from "moment/moment";
import "moment/locale/tr";

const formatDate = (unixTime) => {
  const FlyDate = new Date(unixTime * 1000);
  return moment(FlyDate).calendar();
};
export default formatDate;
