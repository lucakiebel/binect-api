import { Configuration, SendingsApi, SendDocumentRequest } from '../src';
import { readFile } from 'node:fs/promises';


const configuration = new Configuration({
    username: '<username>',
    password: '<password>',
});

const sendingsApi = new SendingsApi(configuration);


readFile('./letter-example.pdf', {encoding: 'base64'}).then(async (data) => {
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