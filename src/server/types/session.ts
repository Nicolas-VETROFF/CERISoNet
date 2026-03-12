declare module "express-session" {
  interface SessionData {
    isConnected: 'false' | 'true';
    userId: number;
    username: string;
    email: string;
    avatar: string;
    lastLogin: string;
  }
}
