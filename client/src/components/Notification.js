import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationHeading,
  NotificationTextWrapper,
} from "../styles/NotificationStyles/NotificationStyles";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineSmile,
} from "react-icons/ai";

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

  const color = alert.type === "success" ? "teal" : "darkred";
  // const iconUrl = alert.type === "success" ? successIcon : errorIcon;

  return (
    <>
      {show ? (
        <NotificationContainer>
          <NotificationTextWrapper>
            <AiOutlineCheckCircle style={{ color: "#e9ecef" }} />
            <NotificationHeading>{alertMsg.message || ""}</NotificationHeading>
            <AiOutlineCloseCircle
              style={{ cursor: "pointer", color: "#e9ecef" }}
              onClick={() => onClose()}
            />
          </NotificationTextWrapper>
        </NotificationContainer>
      ) : null}
    </>
  );
};

export default Notification;
