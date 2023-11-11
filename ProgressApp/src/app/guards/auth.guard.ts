import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthApiService } from '../services/auth-api.service';
import { Observable, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const authApi = inject(AuthApiService);

  return authApi.updateLoggedInStatus().pipe(tap(isLoggedIn=> {isLoggedIn || router.navigate(['/']); }));
};
