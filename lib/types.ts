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

export type ICategory = {
  id: string;
  name: string;
  discription: string;
  createdAt: string;
  updateAt: string;
};

export type ITechnicianProfile = {
  id: string;
  userId: string;
  bio: string;
  experience: number;
  location: string;
  availableStart: string;
  availableEnd: string;
  avgRating: string;
  createdAt: string;
  updateAt: string;
};

export type IService = {
  id: string;
  technicianId: string;
  categoryId: string;
  title: string;
  discription: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
  technicianProfile: ITechnicianProfile;
};

export type ServiceProps = {
  service: IService;
};

export type IMe = {
  success: boolean;
  message: string;
  data: IUser;
};

export type NavbarProps = {
  user: IMe;
};

export type IBookingStatus =
  | "REQUESTED"
  | "ACCEPET"
  | "DECLINED"
  | "IN_PROGRESS"
  | "CANCELED"
  | "COMPLETED";

export type IBooking = {
  id: string;
  customerId: string;
  serviceId: string;
  bookingDate: string;
  amount: number;
  status: IBookingStatus;
  createdAt: string;
  updatedAt: string;
  service: IService;
};

export type BookingState = {
  success: boolean;
  message: string;
  data: IBooking;
};
