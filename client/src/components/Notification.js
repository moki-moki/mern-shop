import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationHeading,
  NotificationTextWrapper,
} from "../styles/NotificationStyles/NotificationStyles";
import { AiOutlineSmile } from "react-icons/ai";

const Notification = () => {
  const { alerts } = useSelector((state) => state.alert);
  const [alertMsg, setAlertMsg] = useState({ type: "", message: "" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alerts.length > 0) {
      setAlertMsg(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [alerts]);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        <NotificationContainer onClick={() => onClose()}>
          <NotificationTextWrapper>
            <NotificationHeading>{alertMsg.message || ""}</NotificationHeading>
          </NotificationTextWrapper>
        </NotificationContainer>
      ) : null}
    </>
  );
};

export default Notification;
