import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isConnected = signal(false);
  username = signal('');
  avatar = signal('');

  constructor() {
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.isConnected.set(localStorage.getItem('isConnected') === 'true');
    this.username.set(localStorage.getItem('username') || '');
    this.avatar.set(localStorage.getItem('avatar') || '');
  }

  login(session: { username: string; avatar: string; }) {
    this.isConnected.set(true);
    this.username.set(session.username);
    this.avatar.set(session.avatar || 'default.jpg');
  }

  logout() {
    localStorage.removeItem('isConnected');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
    localStorage.removeItem('lastLogin');
    this.isConnected.set(false);
    this.username.set('');
    this.avatar.set('');
  }
}
