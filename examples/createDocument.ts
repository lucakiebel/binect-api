import {Configuration, DocumentsApi, CreateDocumentRequest} from '../src';
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

const documentsApi = new DocumentsApi(configuration);


read('./letter-example.pdf').then(async (data) => {
    const doc: CreateDocumentRequest = {
        content: {
            filename: 'example.pdf',
            content: data,
        }
    }
    const result = await documentsApi.createDocument(doc);
    console.log(result.data);
});