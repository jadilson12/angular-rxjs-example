import { Injectable } from '@angular/core';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private key = 'sua-chave-secreta'; // replace your secret key

  encrypt(data: string): string {
    return AES.encrypt(data, this.key).toString();
  }

  decrypt(encryptedData: string): string {
    const bytes = AES.decrypt(encryptedData, this.key);
    return bytes.toString(Utf8);
  }
}
