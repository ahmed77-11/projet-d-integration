import prisma from "../connexion.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

async function main() {
  // ... you will write your Prisma Client queries here
}

export const signup = async (req, res, next) => {
  const {
    username,
    email,
    address,
    telephone,
    userType,
    password,
    confirmpassword,
  } = req.body;
  console.log(password, confirmpassword);
  try {
    const userExist = await prisma.user.findFirst({ where: { email } });
    console.log(userExist);
    if (userExist) return res.status(500).json("user already exist");
    if (password !== confirmpassword)
      return res.status(402).json("password are not the same");
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hashSync(password, salt);

    if (userType == "owner") {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          address,
          telephone,
          password: hashedPassword,
        },
      });
      console.log("efzf");
      const owner = await prisma.owner.create({
        data: {
          userId: newUser.id,
        },
      });
      const typeOfUser = await prisma.userType.create({
        data: {
          userId: newUser.id,
          type: "owner",
        },
      });
    } else {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          address,
          telephone,
          password: hashedPassword,
        },
      });

      const costumer = await prisma.customer.create({
        data: {
          userId: newUser.id,
        },
      });
      const typeOfUser = await prisma.userType.create({
        data: {
          userId: newUser.id,
          type: "customer",
        },
      });
    }
    return res.status(201).json("user created successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await prisma.user.findFirst({ where: { email } });
    if (!validUser) return res.status(404).json("user not found");
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return res.status(401).json("wrong password");
    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    const userType = await prisma.userType.findFirst({
      where: { userId: validUser.id },
    });
    const { password: pass, ...rest } = validUser;
    console.log({ ...rest, userType });
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...rest, userType });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
