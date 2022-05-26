# binect

Typescript Axios Wrapper for binect.de API

The documentation for the different endpoints can be found [here](https://petstore.swagger.io/?url=https://app.binect.de/binectapi/v1_swagger_api_kernel.json).

Usage: 

```typescript
import { Configuration, SendingsApi, SendingsDocumentPostRequest } from 'binect';
import { readFile } from 'node:fs/promises';

const read = async (file: string) => {
    return await readFile(file, {
        encoding: 'base64'
    });
}

// configure the client with your username, password and basepath
const configuration = new Configuration({
    username: '<username>',
    password: '<password>',
    basePath: 'https://app.binect.de/binectapi/v1',
});

const sendingsApi = new SendingsApi(configuration);

// read a pdf letter file from disk as base64 encoded string
read('./letter-example.pdf').then(async (data) => {
    const shipping: SendingsDocumentPostRequest = {
        content: {
            filename: 'example.pdf',
            content: data,
        },
        options: {
            simplex: true,
            color: false,
        },
    };

    const sendingResult = await sendingsApi.sendingsDocumentPost(shipping);

    console.log(sendingResult.data);
});
```

Find more example usages in the examples directory.