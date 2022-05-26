import {Configuration, DocumentsApi, Document} from '../src';

const configuration = new Configuration({
    username: '<username>',
    password: '<password>',
    basePath: 'https://app.binect.de/binectapi/v1',
});

const documentsApi = new DocumentsApi(configuration);

documentsApi.documentsGet().then(res => {
    const documents: Document[] = res.data;
    console.log(documents);
})