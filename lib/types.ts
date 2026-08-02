export type LoginState = {
  success: true;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export type IActiveStatus = "ACTIVE" | "BLOCKED";

export type IUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: IActiveStatus;
  createdAt: string;
  updateAt: string;
};

export type RegisterState = {
  success: true;
  statusCode: number;
  message: string;
  data: IUser;
};
