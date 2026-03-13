export type AccountRole = "admin" | "member" | "guest";
export interface AccountInfo {
  address: string;
  name?: string;
  role: AccountRole;
}
