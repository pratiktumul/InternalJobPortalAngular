import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JobserviceService } from '../jobservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: JobserviceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('userToken') != null) {
      let roles = next.data['role'] as Array<string>;
      if (roles) {
        var match = this.service.roleMatch(roles);
        if (match) return true;
        else {
          this.router.navigate['/home'];
          return false;
        }
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
