import speakeasy from "speakeasy";

const secret = speakeasy.generateSecret({ length: 20 }).base32;

const generateOTP = () => {
  try {
    const token = speakeasy.totp({
      secret: secret,
      encoding: "base32",
      digits: 4,
      step: 60,
    });
    console.log("Token:", token);
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const verifyOtp = (token) => {
  try {
    const result = speakeasy.totp.verify({
      secret: secret,
      encoding: "base32",
      token: token,
      digits: 4,
      step: 60,
      window: 1,
    });
    console.log("Valid:", result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { generateOTP, verifyOtp };