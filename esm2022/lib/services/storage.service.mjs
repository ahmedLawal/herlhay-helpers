import { Injectable } from '@angular/core';
import { HHenvironment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "./encryptor.service";
/**
 * Storage service
 */
export class StorageService {
    /**
     * Specify whether it is a production environment
     */
    get isProduction() {
        return HHenvironment.production;
    }
    /**
     * name of local storage location
     */
    get storageKey() {
        return HHenvironment.storageKey;
    }
    constructor(eS) {
        this.eS = eS;
        /**
         * Encrypts an item
         * @param data Item
         * @returns Encrypted Object
         */
        this.encrypt = this.eS.encryptItem;
        /**
         * Decrypts an encrypted item
         * @param data Encrypted string
         * @returns Decrypted Object
         */
        this.decrypt = this.eS.decryptItem;
        /**
         * Saves an item to the app storage
         * @param key Name of item
         * @param data Item
         * @returns Item
         */
        this.saveItem = (key, data) => {
            try {
                window[this.storageKey].setItem(key, !(data == null || data == undefined)
                    ? this.isProduction
                        ? this.encrypt(data)
                        : JSON.stringify(data)
                    : '');
                return data;
            }
            catch (error) {
                if (error.name == 'QuotaExceededError') {
                    this.clear();
                    return this.saveItem(key, data);
                }
                else {
                    return null;
                }
            }
        };
        /**
         * Saves an item to the app storage asynchronously
         * @param key Name of item
         * @param data Item
         * @returns Item
         */
        this.saveItemA = (key, data) => new Promise((resolve) => {
            resolve(this.saveItem(key, data));
        });
        /**
         * Get an item from the app storage
         * @param key name of item
         * @param shouldThrow Whether to throw an error if it is not found
         * @returns Item
         */
        this.getItem = (key, shouldThrow = false) => {
            if (!key)
                return null;
            const encryptedRes = window[this.storageKey].getItem(key);
            try {
                return this.isProduction
                    ? encryptedRes
                        ? this.decrypt(encryptedRes)
                        : null
                    : JSON.parse(encryptedRes);
            }
            catch (e) {
                console.error(e);
                this.saveItem('_temp' + key, encryptedRes);
                this.removeItem(key);
                if (shouldThrow) {
                    throw new Error('Item not found');
                }
                else {
                    return null;
                }
            }
        };
        /**
         * Get an item from the app storage asynchronously
         * @param key name of item
         * @param shouldThrow  Whether to throw an error if it is not found
         * @returns item
         */
        this.getItemA = (key, shouldThrow = false) => {
            return new Promise((resolve, reject) => {
                try {
                    resolve(this.getItem(key, shouldThrow));
                }
                catch (error) {
                    reject(error);
                }
            });
        };
        /**
         * Remove and item from the app storage
         * @param key name of item
         * @returns
         */
        this.removeItem = (key) => {
            try {
                window[this.storageKey].removeItem(key);
            }
            catch (error) { }
        };
        /**
         * Clear the app storage
         * @returns
         */
        this.clear = () => {
            return window[this.storageKey].clear();
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StorageService, deps: [{ token: i1.EncryptorService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StorageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: StorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.EncryptorService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFHL0Q7O0dBRUc7QUFJSCxNQUFNLE9BQU8sY0FBYztJQUN6Qjs7T0FFRztJQUNILElBQUksWUFBWTtRQUNkLE9BQU8sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLFVBQVU7UUFDWixPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQXNCLEVBQW9CO1FBQXBCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBRTFDOzs7O1dBSUc7UUFDSCxZQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFFOUI7Ozs7V0FJRztRQUNILFlBQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUU5Qjs7Ozs7V0FLRztRQUNILGFBQVEsR0FBRyxDQUFJLEdBQVcsRUFBRSxJQUFPLEVBQUUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUM3QixHQUFHLEVBQ0gsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZO3dCQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FDUCxDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksb0JBQW9CLEVBQUU7b0JBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNqQztxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBRUY7Ozs7O1dBS0c7UUFDSCxjQUFTLEdBQUcsQ0FBSSxHQUFXLEVBQUUsSUFBTyxFQUFFLEVBQUUsQ0FDdEMsSUFBSSxPQUFPLENBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVMOzs7OztXQUtHO1FBQ0gsWUFBTyxHQUFHLENBQVUsR0FBVyxFQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUN0QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFlBQVk7b0JBQ3RCLENBQUMsQ0FBQyxZQUFZO3dCQUNaLENBQUMsQ0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLElBQUk7b0JBQ1IsQ0FBQyxDQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDakM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksV0FBVyxFQUFFO29CQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtRQUNILENBQUMsQ0FBQztRQUVGOzs7OztXQUtHO1FBQ0gsYUFBUSxHQUFHLENBQVUsR0FBVyxFQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUN2RCxPQUFPLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN4QyxJQUFJO29CQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2Y7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGOzs7O1dBSUc7UUFDSCxlQUFVLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUMzQixJQUFJO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDO1lBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRTtRQUNwQixDQUFDLENBQUM7UUFFRjs7O1dBR0c7UUFDSCxVQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ1gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQztJQWxIMkMsQ0FBQzs4R0FmbkMsY0FBYztrSEFBZCxjQUFjLGNBRmIsTUFBTTs7MkZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBISGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IEVuY3J5cHRvclNlcnZpY2UgfSBmcm9tICcuL2VuY3J5cHRvci5zZXJ2aWNlJztcblxuLyoqXG4gKiBTdG9yYWdlIHNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hldGhlciBpdCBpcyBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRcbiAgICovXG4gIGdldCBpc1Byb2R1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIEhIZW52aXJvbm1lbnQucHJvZHVjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBuYW1lIG9mIGxvY2FsIHN0b3JhZ2UgbG9jYXRpb25cbiAgICovXG4gIGdldCBzdG9yYWdlS2V5KCkge1xuICAgIHJldHVybiBISGVudmlyb25tZW50LnN0b3JhZ2VLZXk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZVM6IEVuY3J5cHRvclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEVuY3J5cHRzIGFuIGl0ZW1cbiAgICogQHBhcmFtIGRhdGEgSXRlbVxuICAgKiBAcmV0dXJucyBFbmNyeXB0ZWQgT2JqZWN0XG4gICAqL1xuICBlbmNyeXB0ID0gdGhpcy5lUy5lbmNyeXB0SXRlbTtcblxuICAvKipcbiAgICogRGVjcnlwdHMgYW4gZW5jcnlwdGVkIGl0ZW1cbiAgICogQHBhcmFtIGRhdGEgRW5jcnlwdGVkIHN0cmluZ1xuICAgKiBAcmV0dXJucyBEZWNyeXB0ZWQgT2JqZWN0XG4gICAqL1xuICBkZWNyeXB0ID0gdGhpcy5lUy5kZWNyeXB0SXRlbTtcblxuICAvKipcbiAgICogU2F2ZXMgYW4gaXRlbSB0byB0aGUgYXBwIHN0b3JhZ2VcbiAgICogQHBhcmFtIGtleSBOYW1lIG9mIGl0ZW1cbiAgICogQHBhcmFtIGRhdGEgSXRlbVxuICAgKiBAcmV0dXJucyBJdGVtXG4gICAqL1xuICBzYXZlSXRlbSA9IDxUPihrZXk6IHN0cmluZywgZGF0YTogVCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbdGhpcy5zdG9yYWdlS2V5XS5zZXRJdGVtKFxuICAgICAgICBrZXksXG4gICAgICAgICEoZGF0YSA9PSBudWxsIHx8IGRhdGEgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgID8gdGhpcy5pc1Byb2R1Y3Rpb25cbiAgICAgICAgICAgID8gdGhpcy5lbmNyeXB0KGRhdGEpXG4gICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubmFtZSA9PSAnUXVvdGFFeGNlZWRlZEVycm9yJykge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNhdmVJdGVtKGtleSwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhdmVzIGFuIGl0ZW0gdG8gdGhlIGFwcCBzdG9yYWdlIGFzeW5jaHJvbm91c2x5XG4gICAqIEBwYXJhbSBrZXkgTmFtZSBvZiBpdGVtXG4gICAqIEBwYXJhbSBkYXRhIEl0ZW1cbiAgICogQHJldHVybnMgSXRlbVxuICAgKi9cbiAgc2F2ZUl0ZW1BID0gPFQ+KGtleTogc3RyaW5nLCBkYXRhOiBUKSA9PlxuICAgIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHRoaXMuc2F2ZUl0ZW0oa2V5LCBkYXRhKSk7XG4gICAgfSk7XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpdGVtIGZyb20gdGhlIGFwcCBzdG9yYWdlXG4gICAqIEBwYXJhbSBrZXkgbmFtZSBvZiBpdGVtXG4gICAqIEBwYXJhbSBzaG91bGRUaHJvdyBXaGV0aGVyIHRvIHRocm93IGFuIGVycm9yIGlmIGl0IGlzIG5vdCBmb3VuZFxuICAgKiBAcmV0dXJucyBJdGVtXG4gICAqL1xuICBnZXRJdGVtID0gPFQgPSBhbnk+KGtleTogc3RyaW5nLCBzaG91bGRUaHJvdyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFrZXkpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVuY3J5cHRlZFJlcyA9IHdpbmRvd1t0aGlzLnN0b3JhZ2VLZXldLmdldEl0ZW0oa2V5KTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNQcm9kdWN0aW9uXG4gICAgICAgID8gZW5jcnlwdGVkUmVzXG4gICAgICAgICAgPyA8VD50aGlzLmRlY3J5cHQoZW5jcnlwdGVkUmVzKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgICA6IDxUPkpTT04ucGFyc2UoZW5jcnlwdGVkUmVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhpcy5zYXZlSXRlbSgnX3RlbXAnICsga2V5LCBlbmNyeXB0ZWRSZXMpO1xuICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XG4gICAgICBpZiAoc2hvdWxkVGhyb3cpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdGVtIG5vdCBmb3VuZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gaXRlbSBmcm9tIHRoZSBhcHAgc3RvcmFnZSBhc3luY2hyb25vdXNseVxuICAgKiBAcGFyYW0ga2V5IG5hbWUgb2YgaXRlbVxuICAgKiBAcGFyYW0gc2hvdWxkVGhyb3cgIFdoZXRoZXIgdG8gdGhyb3cgYW4gZXJyb3IgaWYgaXQgaXMgbm90IGZvdW5kXG4gICAqIEByZXR1cm5zIGl0ZW1cbiAgICovXG4gIGdldEl0ZW1BID0gPFQgPSBhbnk+KGtleTogc3RyaW5nLCBzaG91bGRUaHJvdyA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5nZXRJdGVtKGtleSwgc2hvdWxkVGhyb3cpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbmQgaXRlbSBmcm9tIHRoZSBhcHAgc3RvcmFnZVxuICAgKiBAcGFyYW0ga2V5IG5hbWUgb2YgaXRlbVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcmVtb3ZlSXRlbSA9IChrZXk6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbdGhpcy5zdG9yYWdlS2V5XS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBhcHAgc3RvcmFnZVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvd1t0aGlzLnN0b3JhZ2VLZXldLmNsZWFyKCk7XG4gIH07XG59XG4iXX0=