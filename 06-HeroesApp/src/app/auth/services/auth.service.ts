import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl = environments.baseUrl;
  private user?:User;

  constructor(private http:HttpClient) { }

  get currentUser(): User|undefined {

    if ( !this.user ) return undefined;
    return structuredClone(this.user)
  }

  login(email: string, password: string):Observable<User> {

    return this.http.get<User>(`${ this.baseurl }/users/1 `)
    .pipe(
      tap( user => this.user = user),
      tap( user => localStorage.setItem('token', 'aslndin12e.18n1hebi7q.1kbaisbid1' ))
    )
  }

  checkAuthentication(): Observable<boolean>{

    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseurl}/users/1`)
    .pipe(
      tap( user => this.user = user ),
      map( user => !!user),
      catchError( err => of(false) )
    );
  }

  checkAuth(): Observable<boolean>{

    if (!localStorage.getItem('token')) return of(true);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseurl}/users/1`)
    .pipe(
      tap( user => this.user = user ),
      map( user => !user),
      catchError( err => of(true) )
    );
  }





  logout(){
    this.user = undefined;
    localStorage.clear();
  }










}
