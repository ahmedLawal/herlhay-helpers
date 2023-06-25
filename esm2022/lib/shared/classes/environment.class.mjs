import { Config } from '../../config/index.config';
import { Loader } from './page-loader.class';
/**
 * Class for the environment object
 */
export class Environment {
    /**
     * Set the value of the page loader
     */
    set loading(v) {
        if (v)
            this.pageLoader.startPl();
        else
            this.pageLoader.stopPl();
    }
    /**
     *
     * @param production Specify whether it is a production environment
     * @param name Name of the environment
     * @param apiBaseUrl Base url of the server api
     */
    constructor(production, name, apiBaseUrl) {
        this.production = production;
        this.apiBaseUrl = apiBaseUrl;
        /**
         * Defualt app currency
         */
        this.currency = '₦';
        /**
         * name of local storage location
         */
        this.storageKey = 'localStorage';
        /**
         * Name of the app
         */
        this.appName = 'iRAS';
        /**
         * storage key for user object
         */
        this.userStorageKey = 'user';
        /**
         * storage key for embedded user object
         */
        this.enbeddedUserStorageKey = 'enbedded-user';
        /**
         * storage key for super user object
         */
        this.adminUserStorageKey = 'super-user';
        /**
         * page loader object
         */
        this.pageLoader = new Loader();
        /** API Request timeout period
         *  Enter value in millisecond or Date object
         */
        this.requestTimeout = new Date(Config.TimeStampDay * 365 + Date.now());
        this.embedKey = 'weffwdfuion';
        if (!production)
            this.debug = true;
        this.name = name;
    }
    updateEnvironment(env) {
        Object.assign(this, env);
    }
    /**
     * Whether it is the dev environment or not
     */
    get isDev() {
        return !this.production;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY2xhc3Nlcy9lbnZpcm9ubWVudC5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFdBQVc7SUE0RXRCOztPQUVHO0lBQ0gsSUFBSSxPQUFPLENBQUMsQ0FBVTtRQUNwQixJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDOztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQW1CLFVBQW1CLEVBQUUsSUFBWSxFQUFTLFVBQW1CO1FBQTdELGVBQVUsR0FBVixVQUFVLENBQVM7UUFBdUIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQWpGaEY7O1dBRUc7UUFDSCxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBS2Y7O1dBRUc7UUFDSCxlQUFVLEdBQXNDLGNBQWMsQ0FBQztRQUMvRDs7V0FFRztRQUNILFlBQU8sR0FBVyxNQUFNLENBQUM7UUFjekI7O1dBRUc7UUFDTSxtQkFBYyxHQUFHLE1BQU0sQ0FBQztRQUNqQzs7V0FFRztRQUNNLDJCQUFzQixHQUFHLGVBQWUsQ0FBQztRQUNsRDs7V0FFRztRQUNNLHdCQUFtQixHQUFHLFlBQVksQ0FBQztRQUM1Qzs7V0FFRztRQUNILGVBQVUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzFCOztXQUVHO1FBQ0gsbUJBQWMsR0FBa0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFVeEUsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQXdCaEMsSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsR0FBZ0I7UUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDMUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgV2ViU29ja2V0U3ViamVjdCB9IGZyb20gJ3J4anMvd2ViU29ja2V0JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgSU1lbnVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL0lNZW51SXRlbSc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL3BhZ2UtbG9hZGVyLmNsYXNzJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgdGhlIGVudmlyb25tZW50IG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuICAvKipcbiAgICogTGlzdCBvZiBtZW51IGl0ZW1zXG4gICAqL1xuICBtZW51czogSU1lbnVJdGVtW107XG4gIC8qKlxuICAgKiBDdXJyZW50IHBhZ2UgdGl0bGVcbiAgICovXG4gIHBhZ2VUaXRsZTogc3RyaW5nO1xuICAvKipcbiAgICogRGVmdWFsdCBhcHAgY3VycmVuY3lcbiAgICovXG4gIGN1cnJlbmN5ID0gJ+KCpic7XG4gIC8qKlxuICAgKiBFbnZpcm9ubWVudCBuYW1lXG4gICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBuYW1lIG9mIGxvY2FsIHN0b3JhZ2UgbG9jYXRpb25cbiAgICovXG4gIHN0b3JhZ2VLZXk6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyA9ICdsb2NhbFN0b3JhZ2UnO1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgYXBwXG4gICAqL1xuICBhcHBOYW1lOiBzdHJpbmcgPSAnaVJBUyc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSBhdXRoZW50aWNhdGlvblxuICAgKi9cbiAgYXV0aGVudGljYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcHJvZHVjdCBsb2dzIG9yIG5vdC4gVHJ1ZSBtZWFucyBwcm9kdWNlIGxvZ3NcbiAgICovXG4gIGRlYnVnPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgYWN0aXZhdGVkIHJvdXRlXG4gICAqL1xuICBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7IFxuICBvcmdhbmlzYXRpb25OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdG9yYWdlIGtleSBmb3IgdXNlciBvYmplY3RcbiAgICovXG4gIHJlYWRvbmx5IHVzZXJTdG9yYWdlS2V5ID0gJ3VzZXInO1xuICAvKipcbiAgICogc3RvcmFnZSBrZXkgZm9yIGVtYmVkZGVkIHVzZXIgb2JqZWN0XG4gICAqL1xuICByZWFkb25seSBlbmJlZGRlZFVzZXJTdG9yYWdlS2V5ID0gJ2VuYmVkZGVkLXVzZXInO1xuICAvKipcbiAgICogc3RvcmFnZSBrZXkgZm9yIHN1cGVyIHVzZXIgb2JqZWN0XG4gICAqL1xuICByZWFkb25seSBhZG1pblVzZXJTdG9yYWdlS2V5ID0gJ3N1cGVyLXVzZXInO1xuICAvKipcbiAgICogcGFnZSBsb2FkZXIgb2JqZWN0XG4gICAqL1xuICBwYWdlTG9hZGVyID0gbmV3IExvYWRlcigpO1xuICAvKiogQVBJIFJlcXVlc3QgdGltZW91dCBwZXJpb2RcbiAgICogIEVudGVyIHZhbHVlIGluIG1pbGxpc2Vjb25kIG9yIERhdGUgb2JqZWN0XG4gICAqL1xuICByZXF1ZXN0VGltZW91dDogbnVtYmVyIHwgRGF0ZSA9IG5ldyBEYXRlKENvbmZpZy5UaW1lU3RhbXBEYXkgKiAzNjUgKyBEYXRlLm5vdygpKTtcbiAgdmVyc2lvbk5vOiBzdHJpbmc7XG4gIG1peFBhbmVsVG9rZW46IHN0cmluZztcbiAgYWN0aXZlU3ViZG9tYWluU2l0ZTogc3RyaW5nO1xuICBzb2NrZXQ6IFdlYlNvY2tldFN1YmplY3Q8YW55PjtcbiAgdXNlV2ViU29ja2V0OiBib29sZWFuO1xuICBpc1N1cGVyQWRtaW46IGJvb2xlYW47XG4gIGNsaWVudEFkbWluVXJsOiBhbnk7XG4gIGVuY3J5cHRBUElSZXF1ZXN0czogYm9vbGVhbjtcbiAgaXNFbWJlZE1vZGU6IGJvb2xlYW47XG4gIHJlYWRvbmx5IGVtYmVkS2V5ID0gJ3dlZmZ3ZGZ1aW9uJztcbiAgdGF3a0lPQ29uZmlnOiB7XG4gICAgcHJvcGVydHlJZDogc3RyaW5nO1xuICAgIHdpZGdldElkOiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBVc2VyJ3MgYXV0aCB0b2tlblxuICAgKi9cbiAgdG9rZW46IHN0cmluZztcbiAgLyoqXG4gICAqIFNldCB0aGUgdmFsdWUgb2YgdGhlIHBhZ2UgbG9hZGVyXG4gICAqL1xuICBzZXQgbG9hZGluZyh2OiBib29sZWFuKSB7XG4gICAgaWYgKHYpIHRoaXMucGFnZUxvYWRlci5zdGFydFBsKCk7XG4gICAgZWxzZSB0aGlzLnBhZ2VMb2FkZXIuc3RvcFBsKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3Rpb24gU3BlY2lmeSB3aGV0aGVyIGl0IGlzIGEgcHJvZHVjdGlvbiBlbnZpcm9ubWVudFxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBlbnZpcm9ubWVudFxuICAgKiBAcGFyYW0gYXBpQmFzZVVybCBCYXNlIHVybCBvZiB0aGUgc2VydmVyIGFwaVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIHByb2R1Y3Rpb246IGJvb2xlYW4sIG5hbWU6IHN0cmluZywgcHVibGljIGFwaUJhc2VVcmw/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXByb2R1Y3Rpb24pIHRoaXMuZGVidWcgPSB0cnVlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICB1cGRhdGVFbnZpcm9ubWVudChlbnY6IEVudmlyb25tZW50KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBlbnYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgaXQgaXMgdGhlIGRldiBlbnZpcm9ubWVudCBvciBub3RcbiAgICovXG4gIGdldCBpc0RldigpIHtcbiAgICByZXR1cm4gIXRoaXMucHJvZHVjdGlvbjtcbiAgfVxufVxuIl19