import { Configuration, SendingsApi, SendingsDocumentPostRequest } from '../src';
import { readFile } from 'node:fs/promises';

const read = async (file: string) => {
    return await readFile(file, {
        encoding: 'base64'
    });
}


const configuration = new Configuration({
    username: '<username>',
    password: '<password>',
    basePath: 'https://app.binect.de/binectapi/v1',
});

const sendingsApi = new SendingsApi(configuration);


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