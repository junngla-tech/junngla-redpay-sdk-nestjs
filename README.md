# RedPay SDK NestJS

Está librería corresponde a una adaptación de la librería Redpay SDK NodeJS (https://www.npmjs.com/package/redpay-sdk-nodejs) para proyectos desarrollados con la tecnología NestJS, incluye funcionalidades las cuales facilitan la integración al Servicio de RedPay en proyectos desarrollados con NodeJS.

## Control de integridad

Esté set de funciones permiten controlar la integridad de los datos enviados o recibidos en servicios de RedPay.

### generateSignature(input: object, secret: string): string

Permite generar la firma de un objeto.

Parámetros de entrada entrada:
- input: el objeto para el cual desean generar una firma
- secret: el secreto a utilizar para firmar el objeto

Valor de retorno:
- La firma, string de 64 caracteres correspondiente al objeto de entrada

**Ejemplo:**

```typescript
import { generateSignature } from 'redpay-sdk-nodejs';

const signature = generateSignature({
    "hello": "world"
}, 'f441bb4d-9cd3-410a-8ede-cefd33cf3fa0');

console.log(signature);
// output: ba1cf4f1a0d5659a4c7dd8c70f74788a532c644c65eeb3d46d9e56cdb22eaeaa
```

### validateSignature(input: object, secret: string): boolean

Permite validar la firma de un objeto.

Parámetros de entrada entrada:
- input: el objeto para el cual desea validar la firma
- secret: el secreto a utilizar para firmar el objeto

Valor de retorno:
- Un booleano correspondiente a la validez del signature

**Ejemplo:**

```typescript
import { validateSignature } from 'redpay-sdk-nodejs';

const isSignatureValid = validateSignature({
    "hello": "world",
    "signature": "ba1cf4f1a0d5659a4c7dd8c70f74788a532c644c65eeb3d46d9e56cdb22eaeaa"
}, 'f441bb4d-9cd3-410a-8ede-cefd33cf3fa0');

console.log(isSignatureValid);
// output: true
```

### getSignedObject(input: object, secret: string): object

Permite generar un objeto firmado.

Parámetros de entrada entrada:
- input: el objeto para el cual desea sumarle la firma
- secret: el secreto a utilizar para firmar el objeto

Valor de retorno:
- Un objeto poblado con el campo `signature` el cual contiene la firma correspondiente

**Ejemplo:**

```typescript
import { getSignedObject } from 'redpay-sdk-nodejs';

const signedObject = getSignedObject({
    "hello": "world",
    "signature": "ba1cf4f1a0d5659a4c7dd8c70f74788a532c644c65eeb3d46d9e56cdb22eaeaa"
}, 'f441bb4d-9cd3-410a-8ede-cefd33cf3fa0');

console.log(signedObject);
// output: { "hello": "world", "signature": "ba1cf4f1a0d5659a4c7dd8c70f74788a532c644c65eeb3d46d9e56cdb22eaeaa" }
```