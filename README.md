# binect

Typescript Axios Wrapper for binect.de API

The documentation for the different endpoints can be found [here](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/lucakiebel/binect-api/master/binect.yaml).

Usage: 

```typescript
import { Configuration, SendingsApi, SendDocumentRequest } from 'binect';
import { readFile } from 'node:fs/promises';

// create a shared configuration for the apis
const configuration = new Configuration({
    username: '<username>',
    password: '<password>',
});

const sendingsApi = new SendingsApi(configuration);

// read pdf file as base 64 encoded string
readFile('./letter-example.pdf', {encoding: 'base64'}).then(async (data) => {
    const shipping: SendDocumentRequest = {
        content: {
            filename: 'example.pdf',
            content: data,
        },
        options: { // print one-sided black and white
            simplex: true,
            color: false,
        },
    };

    const sendingResult = await sendingsApi.sendDocument(shipping);

    console.log(sendingResult.data);
});
```

Find more example usages in the [examples](./examples) directory.