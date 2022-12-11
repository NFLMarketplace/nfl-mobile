import Toast, { ToastType , ToastPosition} from "react-native-toast-message";

export const randomStr = (len: number = 16) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charsLength = chars.length;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  return result;
};

function showToast(toastType:ToastType, title:string='Alert' ,toastMessage:string, toastPosition:ToastPosition = "bottom", duration:number=3000) {
    toastMessage = htmlEntities(toastMessage)

  Toast.show({
    type: toastType,
    text1: title,
    text2: toastMessage,
    position: toastPosition,
    visibilityTime: duration,
  });
}

export { showToast };

function htmlEntities(str):string {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
