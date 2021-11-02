import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { StorageService } from './shared/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handle(req, next));
    }

    async handle(req: HttpRequest<any>, next: HttpHandler) {
        const auth = await this.storageService.get('auth');

        if (auth?.token) {
            return next.handle(req.clone({ setHeaders: { 'Authorization': 'Token ' + auth.token } })).toPromise();
        }

        return next.handle(req).toPromise();
    }
}