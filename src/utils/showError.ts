import { message } from "antd";
const showError = (errorMessager: string) => {
  message.error(errorMessager);
};
export default showError;
