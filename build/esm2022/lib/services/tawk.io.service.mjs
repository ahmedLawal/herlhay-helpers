import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HHenvironment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "./storage.service";
export class TawkIoService {
    constructor(rendererFactory, _document, LocalStorageService) {
        this.rendererFactory = rendererFactory;
        this._document = _document;
        this.LocalStorageService = LocalStorageService;
        this.loadSubject = new Subject();
        if (HHenvironment?.tawkIOConfig?.propertyId) {
            this.renderer = rendererFactory.createRenderer(null, null);
            this.load();
        }
    }
    load() {
        if (this.loaded)
            return;
        const s = this.renderer.createElement('script');
        s.type = 'text/javascript';
        s.text =
            'var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); ' +
                '(function(){ ' +
                'var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; ' +
                's1.async=true; ' +
                `s1.src='https://embed.tawk.to/${HHenvironment.tawkIOConfig.propertyId}/${HHenvironment.tawkIOConfig.widgetId}'; ` +
                "s1.charset='UTF-8'; " +
                "s1.setAttribute('crossorigin','*'); " +
                's0.parentNode.insertBefore(s1,s0); ' +
                '})();';
        this.renderer.appendChild(this._document.body, s);
        Tawk_API.onLoad = this.loadedEvent.bind(this);
    }
    loadedEvent() {
        this.loaded = true;
        this.loadSubject.next(this.loaded);
    }
    UpdateTawkUser(user) {
        this.loadedWrapper(() => {
            this.updateAtrributes(user);
        });
    }
    loadedWrapper(func) {
        if (!this.loaded) {
            var sub = this.loadSubject.asObservable().subscribe({
                next: () => {
                    func();
                    sub.unsubscribe();
                },
                error: () => { },
            });
        }
        else {
            func();
        }
    }
    ExpandChatWindow(show = false) {
        this.loadedWrapper(() => (show ? Tawk_API.maximize() : Tawk_API.minimize()));
    }
    SetChatVisibility(show = false) {
        this.loadedWrapper(() => (show ? Tawk_API.showWidget() : Tawk_API.hideWidget()));
    }
    updateAtrributes(user) {
        Tawk_API.setAttributes({
            name: `${user.firstname} ${user.surname}`,
            email: user.email,
            id: user.id,
        }, function (error) { });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TawkIoService, deps: [{ token: i0.RendererFactory2 }, { token: DOCUMENT }, { token: i1.StorageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TawkIoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: TawkIoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGF3ay5pby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvdGF3ay5pby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQU0vRCxNQUFNLE9BQU8sYUFBYTtJQUt4QixZQUNVLGVBQWlDLEVBQ2YsU0FBbUIsRUFDckMsbUJBQW1DO1FBRm5DLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFnQjtRQU5yQyxnQkFBVyxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBUTdELElBQUksYUFBYSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFeEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDLENBQUMsSUFBSTtZQUNKLHdEQUF3RDtnQkFDeEQsZUFBZTtnQkFDZix5RkFBeUY7Z0JBQ3pGLGlCQUFpQjtnQkFDakIsaUNBQWlDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLO2dCQUNsSCxzQkFBc0I7Z0JBQ3RCLHNDQUFzQztnQkFDdEMscUNBQXFDO2dCQUNyQyxPQUFPLENBQUM7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sY0FBYyxDQUFDLElBQVM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFTO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNsRCxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUNULElBQUksRUFBRSxDQUFDO29CQUNQLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQzthQUNoQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxFQUFFLENBQUM7U0FDUjtJQUNILENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxPQUFnQixLQUFLO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU0saUJBQWlCLENBQUMsT0FBZ0IsS0FBSztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVPLGdCQUFnQixDQUFDLElBQVM7UUFDaEMsUUFBUSxDQUFDLGFBQWEsQ0FDcEI7WUFDRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNaLEVBQ0QsVUFBVSxLQUFLLElBQUcsQ0FBQyxDQUNwQixDQUFDO0lBQ0osQ0FBQzs4R0E3RVUsYUFBYSxrREFPZCxRQUFRO2tIQVBQLGFBQWEsY0FGWixNQUFNOzsyRkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBUUksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSEhlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5kZWNsYXJlIHZhciBUYXdrX0FQSTogYW55O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGF3a0lvU2VydmljZSB7XG4gIHByaXZhdGUgbG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIGxvYWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIExvY2FsU3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlXG4gICkge1xuICAgIGlmIChISGVudmlyb25tZW50Py50YXdrSU9Db25maWc/LnByb3BlcnR5SWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKSB7XG4gICAgaWYgKHRoaXMubG9hZGVkKSByZXR1cm47XG5cbiAgICBjb25zdCBzID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzLnRleHQgPVxuICAgICAgJ3ZhciBUYXdrX0FQST1UYXdrX0FQSXx8e30sIFRhd2tfTG9hZFN0YXJ0PW5ldyBEYXRlKCk7ICcgK1xuICAgICAgJyhmdW5jdGlvbigpeyAnICtcbiAgICAgICd2YXIgczE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxzMD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTsgJyArXG4gICAgICAnczEuYXN5bmM9dHJ1ZTsgJyArXG4gICAgICBgczEuc3JjPSdodHRwczovL2VtYmVkLnRhd2sudG8vJHtISGVudmlyb25tZW50LnRhd2tJT0NvbmZpZy5wcm9wZXJ0eUlkfS8ke0hIZW52aXJvbm1lbnQudGF3a0lPQ29uZmlnLndpZGdldElkfSc7IGAgK1xuICAgICAgXCJzMS5jaGFyc2V0PSdVVEYtOCc7IFwiICtcbiAgICAgIFwiczEuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsJyonKTsgXCIgK1xuICAgICAgJ3MwLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHMxLHMwKTsgJyArXG4gICAgICAnfSkoKTsnO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuYm9keSwgcyk7XG4gICAgVGF3a19BUEkub25Mb2FkID0gdGhpcy5sb2FkZWRFdmVudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkZWRFdmVudCgpIHtcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgdGhpcy5sb2FkU3ViamVjdC5uZXh0KHRoaXMubG9hZGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBVcGRhdGVUYXdrVXNlcih1c2VyOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRlZFdyYXBwZXIoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBdHJyaWJ1dGVzKHVzZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkZWRXcmFwcGVyKGZ1bmM6IGFueSkge1xuICAgIGlmICghdGhpcy5sb2FkZWQpIHtcbiAgICAgIHZhciBzdWIgPSB0aGlzLmxvYWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBmdW5jKCk7XG4gICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIEV4cGFuZENoYXRXaW5kb3coc2hvdzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy5sb2FkZWRXcmFwcGVyKCgpID0+IChzaG93ID8gVGF3a19BUEkubWF4aW1pemUoKSA6IFRhd2tfQVBJLm1pbmltaXplKCkpKTtcbiAgfVxuXG4gIHB1YmxpYyBTZXRDaGF0VmlzaWJpbGl0eShzaG93OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICB0aGlzLmxvYWRlZFdyYXBwZXIoKCkgPT4gKHNob3cgPyBUYXdrX0FQSS5zaG93V2lkZ2V0KCkgOiBUYXdrX0FQSS5oaWRlV2lkZ2V0KCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXRycmlidXRlcyh1c2VyOiBhbnkpIHtcbiAgICBUYXdrX0FQSS5zZXRBdHRyaWJ1dGVzKFxuICAgICAge1xuICAgICAgICBuYW1lOiBgJHt1c2VyLmZpcnN0bmFtZX0gJHt1c2VyLnN1cm5hbWV9YCxcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge31cbiAgICApO1xuICB9XG59XG4iXX0=