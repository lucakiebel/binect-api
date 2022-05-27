# binect

Typescript Axios Wrapper for binect.de API

The documentation for the different endpoints can be found [here](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/lucakiebel/binect-api/master/binect.yaml).

Usage: 

```typescript
import { Configuration, SendingsApi, SendDocumentRequest } from 'binect';
import { readFile } from 'node:fs/promises';

const read = async (file: string) => {
    return await readFile(file, {
        encoding: 'base64'
    });
}


const configuration = new Configuration({
    username: '<username>',
    password: '<password>'
});

const sendingsApi = new SendingsApi(configuration);


read('./letter-example.pdf').then(async (data) => {
    const shipping: SendDocumentRequest = {
        content: {
            filename: 'example.pdf',
            content: data,
        },
        options: {
            simplex: true,
            color: false,
        },
    };

    const sendingResult = await sendingsApi.sendDocument(shipping);

    console.log(sendingResult.data);
});
```

Find more example usages in the examples directory.