export interface UserProfile {
  displayName: string;
  email: string;
  fullName: string;
  id: string;
  profilePicture: string;
}

export interface UserSetting {
  hiddenProfile: boolean;
  page: string;
  privateProfile: boolean;
}
