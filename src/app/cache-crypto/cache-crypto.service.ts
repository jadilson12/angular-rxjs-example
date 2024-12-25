import { inject, Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root',
})
export class CacheCryptoService {
  private encryptionService = inject(EncryptionService);

  set(key: string, value: any): void {
    const data = JSON.stringify(value);
    const encryptedData = this.encryptionService.encrypt(data);
    localStorage.setItem(key, encryptedData);
  }

  get(key: string): any {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      const decryptedData = this.encryptionService.decrypt(encryptedData);
      return JSON.parse(decryptedData);
    }
    return null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
