export class User {
    id: number;
    username: string;
    profilePicture: string;
  
    constructor(id: number, username: string, profilePicture: string) {
      this.id = id;
      this.username = username;
      this.profilePicture = profilePicture;
    }
  }