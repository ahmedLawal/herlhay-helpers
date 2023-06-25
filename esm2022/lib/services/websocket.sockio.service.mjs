import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { ReplaySubject } from 'rxjs';
import { HHenvironment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "./utility.service";
export class WebsocketService {
    constructor(uS) {
        this.uS = uS;
        this.sockets = {
            coreEV: HHenvironment.useWebSocket ? new IRSocket() : null,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: WebsocketService, deps: [{ token: i1.UtilityService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: WebsocketService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: WebsocketService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.UtilityService }]; } });
export class IRSocket {
    get id() {
        return this.socket?.id;
    }
    get isConnected() {
        return this.socket?.connected;
    }
    /**
     *
     * @param basePath Websocket url as a prefix. Defaults to use the base api to form a websocket URL
     * @param path Path to the websocket to listen to.
     */
    constructor(basePath, path) {
        this.maxRetryCount = 5;
        this.onConnectionError = new ReplaySubject();
        this.onDisconnect = new ReplaySubject();
        this.listeners = {};
        this.retryCount = 0;
        this.route =
            basePath ||
                HHenvironment.apiBaseUrl
                    ?.replace('https', 'wss')
                    ?.replace('http', 'ws')
                    .replace('/api/', '/');
        // if (!this.route.endsWith('/')) this.route += '/';
        if (this.route.endsWith('/'))
            this.route;
        // console.log(this.route);
        // debugger;
        this.socket = io(this.route);
        // this.socket = io();
        this.socket.on('connect', () => {
            // console.log(this.socket.connected); // true
        });
        this.socket.on('connect_error', (e) => {
            if (this.retryCount < this.maxRetryCount)
                this.onConnectionError.next(e);
            else {
                setTimeout(() => {
                    this.retryCount++;
                    this.socket.connect();
                }, 700);
            }
            // console.log(this.socket.connected); // true
        });
        this.addListener(path);
        this.socket.on('disconnect', (e) => {
            this.onDisconnect.next(e);
            // console.log(this.socket.connected); // false
        });
    }
    /**
     *
     * @param path
     * @param identifier @defualt environment.user.user.id
     * @returns
     */
    addListener(path, identifier = this.identifier) {
        if (path) {
            if (!this.listeners[path]) {
                this.listeners[path] = new ReplaySubject();
                console.log(path + (identifier ? '-' + identifier : ''));
                this.socket.on(path + (identifier ? '-' + identifier : ''), (args) => {
                    console.log(args);
                    this.listeners[path].next(args);
                });
            }
            return this.listeners[path];
        }
        else
            return null;
    }
    removeListener(path) {
        if (path) {
            this.socket.off(path);
            this.listeners[path]?.complete();
            delete this.listeners[path];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LnNvY2tpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvd2Vic29ja2V0LnNvY2tpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEVBQUUsRUFBVSxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFLL0QsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQixZQUFtQixFQUFrQjtRQUFsQixPQUFFLEdBQUYsRUFBRSxDQUFnQjtRQUg1QixZQUFPLEdBQUc7WUFDakIsTUFBTSxFQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUEsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFBLElBQUk7U0FDdkQsQ0FBQztJQUNzQyxDQUFDOzhHQUo5QixnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQUZmLE1BQU07OzJGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7O0FBZ0JELE1BQU0sT0FBTyxRQUFRO0lBQ25CLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQVNEOzs7O09BSUc7SUFDSCxZQUFZLFFBQWlCLEVBQUUsSUFBYTtRQVg1QyxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixzQkFBaUIsR0FBRyxJQUFJLGFBQWEsRUFBRSxD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RTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuL3V0aWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBpbywgU29ja2V0IH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBISGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdlYnNvY2tldFNlcnZpY2Uge1xuICByZWFkb25seSBzb2NrZXRzID0ge1xuICAgIGNvcmVFVjpISGVudmlyb25tZW50LnVzZVdlYlNvY2tldD8gbmV3IElSU29ja2V0KCk6bnVsbCxcbiAgfTtcbiAgY29uc3RydWN0b3IocHVibGljIHVTOiBVdGlsaXR5U2VydmljZSkge31cblxuICAvLyBhZGRTb2NrZXQocm91dGU6IHN0cmluZykge1xuICAvLyAgIGlmICghcm91dGUpIHJldHVybjtcbiAgLy8gICBjb25zdCBpbmQgPSB0aGlzLnNvY2tldHMuZmluZEluZGV4KCh4KSA9PiB4LnJvdXRlID09IHJvdXRlKTtcbiAgLy8gICBpZiAoaW5kID4gLTEpIHtcbiAgLy8gICAgIHRoaXMuc29ja2V0c1tpbmRdID0gbmV3IEVUU1NvY2tldChyb3V0ZSk7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbmV4cG9ydCBjbGFzcyBJUlNvY2tldCB7XG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zb2NrZXQ/LmlkO1xuICB9XG4gIGdldCBpc0Nvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zb2NrZXQ/LmNvbm5lY3RlZDtcbiAgfVxuICByb3V0ZTogc3RyaW5nO1xuICByZXRyeUNvdW50OiBudW1iZXI7XG4gIG1heFJldHJ5Q291bnQ6IG51bWJlciA9IDU7XG4gIHNvY2tldDogU29ja2V0O1xuICBvbkNvbm5lY3Rpb25FcnJvciA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG4gIG9uRGlzY29ubmVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG4gIGxpc3RlbmVyczogeyBbcGF0aDogc3RyaW5nXTogUmVwbGF5U3ViamVjdDxhbnk+IH0gPSB7fTtcbiAgaWRlbnRpZmllcjpzdHJpbmdcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBiYXNlUGF0aCBXZWJzb2NrZXQgdXJsIGFzIGEgcHJlZml4LiBEZWZhdWx0cyB0byB1c2UgdGhlIGJhc2UgYXBpIHRvIGZvcm0gYSB3ZWJzb2NrZXQgVVJMXG4gICAqIEBwYXJhbSBwYXRoIFBhdGggdG8gdGhlIHdlYnNvY2tldCB0byBsaXN0ZW4gdG8uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlUGF0aD86IHN0cmluZywgcGF0aD86IHN0cmluZykge1xuICAgIHRoaXMucmV0cnlDb3VudCA9IDA7XG4gICAgdGhpcy5yb3V0ZSA9XG4gICAgICBiYXNlUGF0aCB8fFxuICAgICAgSEhlbnZpcm9ubWVudC5hcGlCYXNlVXJsXG4gICAgICAgID8ucmVwbGFjZSgnaHR0cHMnLCAnd3NzJylcbiAgICAgICAgPy5yZXBsYWNlKCdodHRwJywgJ3dzJylcbiAgICAgICAgLnJlcGxhY2UoJy9hcGkvJywgJy8nKTtcbiAgICAvLyBpZiAoIXRoaXMucm91dGUuZW5kc1dpdGgoJy8nKSkgdGhpcy5yb3V0ZSArPSAnLyc7XG4gICAgaWYgKHRoaXMucm91dGUuZW5kc1dpdGgoJy8nKSkgdGhpcy5yb3V0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJvdXRlKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMucm91dGUpO1xuICAgIC8vIHRoaXMuc29ja2V0ID0gaW8oKTtcbiAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc29ja2V0LmNvbm5lY3RlZCk7IC8vIHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgKGUpID0+IHtcbiAgICAgIGlmICh0aGlzLnJldHJ5Q291bnQgPCB0aGlzLm1heFJldHJ5Q291bnQpIHRoaXMub25Db25uZWN0aW9uRXJyb3IubmV4dChlKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJldHJ5Q291bnQrKztcbiAgICAgICAgICB0aGlzLnNvY2tldC5jb25uZWN0KCk7XG4gICAgICAgIH0sIDcwMCk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNvY2tldC5jb25uZWN0ZWQpOyAvLyB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcihwYXRoKTtcbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsIChlKSA9PiB7XG4gICAgICB0aGlzLm9uRGlzY29ubmVjdC5uZXh0KGUpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zb2NrZXQuY29ubmVjdGVkKTsgLy8gZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcGF0aFxuICAgKiBAcGFyYW0gaWRlbnRpZmllciBAZGVmdWFsdCBlbnZpcm9ubWVudC51c2VyLnVzZXIuaWRcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFkZExpc3RlbmVyPFQgPSB7IHBlcmNlbnRhZ2U6IG51bWJlcjsgc3RhdHVzOiBib29sZWFuOyBpZDogc3RyaW5nIH0+KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBpZGVudGlmaWVyIDpzdHJpbmc9dGhpcy5pZGVudGlmaWVyXG4gICkge1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW3BhdGhdKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW3BhdGhdID0gbmV3IFJlcGxheVN1YmplY3Q8VD4oKTtcbiAgICAgICAgY29uc29sZS5sb2cocGF0aCArIChpZGVudGlmaWVyID8gJy0nICsgaWRlbnRpZmllciA6ICcnKSk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKHBhdGggKyAoaWRlbnRpZmllciA/ICctJyArIGlkZW50aWZpZXIgOiAnJyksIChhcmdzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYXJncyk7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbcGF0aF0ubmV4dChhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnNbcGF0aF0gYXMgUmVwbGF5U3ViamVjdDxUPjtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVtb3ZlTGlzdGVuZXIocGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRoaXMuc29ja2V0Lm9mZihwYXRoKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzW3BhdGhdPy5jb21wbGV0ZSgpO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW3BhdGhdO1xuICAgIH1cbiAgfVxufVxuIl19