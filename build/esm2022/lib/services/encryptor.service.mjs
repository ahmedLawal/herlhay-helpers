import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
import * as i0 from "@angular/core";
/**
 * Encryption Decryption service
 */
export class EncryptorService {
    /**
     * Encryption Decryption service
     */
    constructor() {
        this.RESPONSE_AESKEY = 'prao7lqjpgymv60eltc6tbdiahe69wf4';
        this.secret = this.RESPONSE_AESKEY;
        this.plusDelimiter = '~---~~';
        this.encryptText = (data, key = this.secret) => {
            let encText = AES.encrypt(JSON.stringify(data), key).toString();
            // enc = enc.split('/').join(this.delimiter);
            encText = encText.split('+').join(this.plusDelimiter);
            return encText;
        };
        this.decryptText = (data, key = this.secret) => {
            const encText = data.split(this.plusDelimiter).join('+');
            return JSON.parse(AES.decrypt(encText, key).toString(enc.Utf8));
        };
        /**
         * Encrypts an item
         * @param data Item
         * @returns Encrypted Object
         */
        this.encryptItem = (data) => {
            try {
                if (this.RESPONSE_AESKEY) {
                    return AES.encrypt(JSON.stringify(data), this.RESPONSE_AESKEY).toString();
                }
                throw new Error('AES and IV keys must be set');
            }
            catch (error) {
                throw error;
            }
        };
        /**
         * Decrypts an encrypted item
         * @param data Encrypted string
         * @returns Decrypted Object
         */
        this.decryptItem = (data) => {
            try {
                if (this.RESPONSE_AESKEY) {
                    // debugger
                    if (typeof data != 'string')
                        return data;
                    const decryptedData = AES.decrypt(data, this.RESPONSE_AESKEY || '');
                    const d = JSON.parse(decryptedData.toString(enc.Utf8));
                    console.log(d);
                    return d;
                }
                throw new Error('AES and IV keys must be set');
            }
            catch (error) {
                throw error;
            }
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: EncryptorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: EncryptorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: EncryptorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9lbmNyeXB0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUVyQzs7R0FFRztBQUlILE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0I7O09BRUc7SUFDSDtRQVBBLG9CQUFlLEdBQUcsa0NBQWtDLENBQUM7UUFDckQsV0FBTSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDdEMsa0JBQWEsR0FBRyxRQUFRLENBQUM7UUFPekIsZ0JBQVcsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3hDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoRSw2Q0FBNkM7WUFDN0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixnQkFBVyxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDO1FBQ0Y7Ozs7V0FJRztRQUNILGdCQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNyQixJQUFJO2dCQUNGLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNwQixJQUFJLENBQUMsZUFBZSxDQUNyQixDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNkO2dCQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUNoRDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUM7UUFFRjs7OztXQUlHO1FBQ0gsZ0JBQVcsR0FBRyxDQUFVLElBQVksRUFBRSxFQUFFO1lBQ3RDLElBQUk7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixXQUFXO29CQUNYLElBQUksT0FBTyxJQUFJLElBQUksUUFBUTt3QkFBRSxPQUFPLElBQVMsQ0FBQztvQkFDOUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDcEUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBTSxDQUFDO29CQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLE9BQU8sQ0FBQyxDQUFDO2lCQUNWO2dCQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUNoRDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUM7SUFsRGEsQ0FBQzs4R0FSTCxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQUZmLE1BQU07OzJGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBRVMsIGVuYyB9IGZyb20gJ2NyeXB0by1qcyc7XG5cbi8qKlxuICogRW5jcnlwdGlvbiBEZWNyeXB0aW9uIHNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEVuY3J5cHRvclNlcnZpY2Uge1xuICBSRVNQT05TRV9BRVNLRVkgPSAncHJhbzdscWpwZ3ltdjYwZWx0YzZ0YmRpYWhlNjl3ZjQnO1xuICBzZWNyZXQ6IHN0cmluZyA9IHRoaXMuUkVTUE9OU0VfQUVTS0VZO1xuICBwbHVzRGVsaW1pdGVyID0gJ34tLS1+fic7XG5cbiAgLyoqXG4gICAqIEVuY3J5cHRpb24gRGVjcnlwdGlvbiBzZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZW5jcnlwdFRleHQgPSAoZGF0YSwga2V5ID0gdGhpcy5zZWNyZXQpID0+IHtcbiAgICBsZXQgZW5jVGV4dCA9IEFFUy5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGRhdGEpLCBrZXkpLnRvU3RyaW5nKCk7XG4gICAgLy8gZW5jID0gZW5jLnNwbGl0KCcvJykuam9pbih0aGlzLmRlbGltaXRlcik7XG4gICAgZW5jVGV4dCA9IGVuY1RleHQuc3BsaXQoJysnKS5qb2luKHRoaXMucGx1c0RlbGltaXRlcik7XG4gICAgcmV0dXJuIGVuY1RleHQ7XG4gIH07XG4gIGRlY3J5cHRUZXh0ID0gKGRhdGE6IHN0cmluZywga2V5ID0gdGhpcy5zZWNyZXQpID0+IHtcbiAgICBjb25zdCBlbmNUZXh0ID0gZGF0YS5zcGxpdCh0aGlzLnBsdXNEZWxpbWl0ZXIpLmpvaW4oJysnKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShBRVMuZGVjcnlwdChlbmNUZXh0LCBrZXkpLnRvU3RyaW5nKGVuYy5VdGY4KSk7XG4gIH07XG4gIC8qKlxuICAgKiBFbmNyeXB0cyBhbiBpdGVtXG4gICAqIEBwYXJhbSBkYXRhIEl0ZW1cbiAgICogQHJldHVybnMgRW5jcnlwdGVkIE9iamVjdFxuICAgKi9cbiAgZW5jcnlwdEl0ZW0gPSAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5SRVNQT05TRV9BRVNLRVkpIHtcbiAgICAgICAgcmV0dXJuIEFFUy5lbmNyeXB0KFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgIHRoaXMuUkVTUE9OU0VfQUVTS0VZXG4gICAgICAgICkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignQUVTIGFuZCBJViBrZXlzIG11c3QgYmUgc2V0Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVjcnlwdHMgYW4gZW5jcnlwdGVkIGl0ZW1cbiAgICogQHBhcmFtIGRhdGEgRW5jcnlwdGVkIHN0cmluZ1xuICAgKiBAcmV0dXJucyBEZWNyeXB0ZWQgT2JqZWN0XG4gICAqL1xuICBkZWNyeXB0SXRlbSA9IDxUID0gYW55PihkYXRhOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuUkVTUE9OU0VfQUVTS0VZKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnc3RyaW5nJykgcmV0dXJuIGRhdGEgYXMgVDtcbiAgICAgICAgY29uc3QgZGVjcnlwdGVkRGF0YSA9IEFFUy5kZWNyeXB0KGRhdGEsIHRoaXMuUkVTUE9OU0VfQUVTS0VZIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZCA9IEpTT04ucGFyc2UoZGVjcnlwdGVkRGF0YS50b1N0cmluZyhlbmMuVXRmOCkpIGFzIFQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignQUVTIGFuZCBJViBrZXlzIG11c3QgYmUgc2V0Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==