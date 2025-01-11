export interface IPagin {
  currentPage: number;
  pageSize: number;
  totalRows: number;
  totalPages: number;
}

export interface IDropDown<T = number> {
  id: T;
  name: string;
}

export interface IUserResponse {
  empCode: string;
  email: string;
  profile: string;
  fullname: string;
  token: string;
  role: IRoleSystem;
  branchCode: string;
  branchName: string;
}

export interface ILoginReq {
  username: string;
  password: string;
}

export interface AuthState {
  user: IUserResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IDeleteWithId {
  id: number;
  createdBy: string;
}

// สิทธิ์การใช้งาน
export interface IRoleSystem {
  roleName: string[];
  systems: ISystem[];
}

export interface ISystem {
  systemId: number;
  menu: IMenu[];
}

export interface IMenu {
  menuId: number;
  menuName: string;
  menuPath: string;
  parentMenuId: number | null;
  displayOrder: number;
  permissions: IPermission[];
}

export enum IPermission {
  Create = "Create",
  Delete = "Delete",
  Export = "Export",
  Import = "Import",
  Read = "Read",
  Update = "Update",
}

export interface ISvg {
  width: number;
  height: number;
  fill?: string; // พร็อพตัวเลือก
  className?: string; // เพิ่ม className เป็นตัวเลือก
}