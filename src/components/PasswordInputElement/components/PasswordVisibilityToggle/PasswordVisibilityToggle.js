import NakedButton from "../../../NakedButton";
import eyeLine from "./assets/eye-line.svg";
import eyeCloseLine from "./assets/eye-close-line.svg";

const PasswordVisibilityToggle = ({ showEye, setShowEye }) => {
  return (
    <NakedButton
      type="button"
      onClick={() => {
        setShowEye(!showEye);
      }}
    >
      {showEye ? (
        <img alt="visible" src={eyeLine} />
      ) : (
        <img alt="invisible" src={eyeCloseLine} />
      )}
    </NakedButton>
  );
};

export default PasswordVisibilityToggle;
