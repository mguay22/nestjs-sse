import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class CryptoService {
  constructor(private readonly httpService: HttpService) {}

  getAssets(): Observable<any> {
    return this.httpService.get('https://api.coincap.io/v2/assets');
  }
}
