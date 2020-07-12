import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpUserEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private route: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') == 'True') return next.handle(req.clone());
    if (localStorage.getItem('userToken') != null) {
      const clonereq = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer' + localStorage.getItem('userToken')
        ),
      });
      return next.handle(clonereq).do(
        (succ) => {},
        (err) => {
          if (err.status == 401) this.route.navigate(['/login']);
        }
      );
    } else this.route.navigate(['/login']);
  }
}
