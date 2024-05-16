import { Controller, Sse } from '@nestjs/common';
import { concatMap, timer } from 'rxjs';
import { CryptoService } from './crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Sse('assets')
  getAssets() {
    return timer(0, 10000).pipe(
      concatMap(() => this.cryptoService.getAssets()),
    );
  }
}
