import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Auth: Auth) { }

  register (email : string, password : string) {
    return createUserWithEmailAndPassword(this.Auth, email, password)
  }
}
