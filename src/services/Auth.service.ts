import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { UserModel } from "src/models/User.model";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    userRoles: string = `${environment.baseUrl}/Response/UserResponse`;
    //private userRoles: string[] = ['Administrador', 'Usuario'];
  
    constructor(private router: Router, private http: HttpClient) {}
  
    user!: UserModel[];

    canAccess(role: string): boolean {
        const userString = localStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
      if (user && this.userRoles.includes(user.role)) {
        //return user.role === role;
        this.user.map(s => s.role === role)
      }
      this.router.navigate(['/login']);
      return false;
    }
    getUserRoles(userId: UserModel): Observable<string[]> {
      return this.http.get<string[]>(`/${this.userRoles}/${userId}`);
    }
    getUser(): Observable<UserModel[]> {
      return this.http.get<UserModel[]>(`${this.userRoles}`);
    }
  }