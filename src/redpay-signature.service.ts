import { Injectable } from '@nestjs/common';
import { generateSignature as _generateSignature, SignedObject } from 'redpay-sdk-nodejs';
import { validateSignature as _validateSignature } from 'redpay-sdk-nodejs';
import { getSignedObject as _getSignedObject } from 'redpay-sdk-nodejs';

@Injectable()
export class RedpaySignatureService {

  constructor() {}

  generateSignature(
      object: object,
      secret: string,
  ) {
    return _generateSignature(object, secret);
  }

  validateSignature(
      object: SignedObject,
      secret: string,
  ) {
    return _validateSignature(object, secret);
  }

  getSignedObject(
      object: object,
      secret: string,
  ) {
    return _getSignedObject(object, secret);
  }
}
