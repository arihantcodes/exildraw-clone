import z from "zod";

export const SignupSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string(),
  password: z.string().min(7).max(30),
});

export const SigninSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const CreateRoomSchema = z.object({
  roomName: z.string().min(3).max(30),
});
