import signupLottie from "../assets/lotties/signup.json";
import loginLottie from "../assets/lotties/login.json";

export const defaultOptions = [
  {
    loop: true,
    autoplay: true,
    animationData: signupLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    loop: true,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
];
