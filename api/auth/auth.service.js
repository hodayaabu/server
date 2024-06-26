import Cryptr from "cryptr";
import bcrypt from "bcrypt";

import { userService } from "../user/user.service.js";

const cryptr = new Cryptr(process.env.SECRET1 || "Secret-Puk-1234");

export const authService = {
  getLoginToken,
  validateToken,
  login,
  signup,
};

function getLoginToken(user) {
  const str = JSON.stringify(user);
  const encryptedStr = cryptr.encrypt(str);
  return encryptedStr;
}

function validateToken(token) {
  try {
    const json = cryptr.decrypt(token);
    const loggedinUser = JSON.parse(json);
    return loggedinUser;
  } catch (err) {
    console.log("Invalid login token");
  }
  return null;
}

async function login(username, password) {

  var user = await userService.getByUsername(username);
  if (!user) throw "Unkown username";

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw "Invalid username or password";

  const miniUser = {
    _id: user._id,
    username: user.username,
    imgUrl: user.imgUrl,
    email: user.email,
  };
  return miniUser;
}

async function signup({ username, password, email, imgUrl, }) {
  const saltRounds = 10;

  if (!username || !password || !email)
    throw "Missing required signup information";

  const hash = await bcrypt.hash(password, saltRounds);
  return userService.add({ username, password: hash, email, imgUrl, });
}
