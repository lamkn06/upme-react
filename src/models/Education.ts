export interface UserProfile {
  displayName: string;
  email: string;
  fullName: string;
  id: string;
  profilePicture: string;
}

export interface Education {
  degree: string;
  institution: string;
  educateFrom: Date;
  educateTo: Date;
}
