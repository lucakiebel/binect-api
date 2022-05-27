import {Configuration, DocumentsApi, Document} from '../src';

const configuration = new Configuration({
    username: '<username>',
    password: '<password>',
});

const documentsApi = new DocumentsApi(configuration);

documentsApi.getAllDocuments().then(res => {
    const documents: Document[] = res.data;
    console.log(documents);
})