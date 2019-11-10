import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ZDocument } from '../models/DocumentModel';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  zDocumentsCollection: AngularFirestoreCollection<ZDocument>;
  zDocumentDoc: AngularFirestoreDocument<ZDocument>;
  zDocuments: Observable<ZDocument[]>;
  zDocument: Observable<ZDocument>;

  constructor(private afs: AngularFirestore) {
    this.zDocumentsCollection = this.afs.collection('/blueprint-1');
  }

  getDocuments(): Observable<ZDocument[]> {
    // Get clients with the id
    this.zDocuments = this.zDocumentsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ZDocument;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.zDocuments;
  }

  newDocument(client: ZDocument) {
    this.zDocumentsCollection.add(client);
  }

  getDocument(id: string): Observable<ZDocument> {
    this.zDocumentDoc = this.afs.doc<ZDocument>(`blueprint-1/${id}`);
    this.zDocument = this.zDocumentDoc.valueChanges();

    return this.zDocument;
  }

  getDocumentBySlug(slug: string): Observable<ZDocument[]> {
    this.zDocuments = this.afs.collection('blueprint-1', ref => ref.where('slug', '==' , slug)).valueChanges();
    return this.zDocuments;
  }


  updateDocument(zDocument: ZDocument) {
    this.zDocumentDoc = this.afs.doc(`blueprint-1/${zDocument.id}`);
    this.zDocumentDoc.update(zDocument);
  }

  deleteDocument(zDocument: ZDocument) {
    this.zDocumentDoc = this.afs.doc(`blueprint-1/${zDocument.id}`);
    this.zDocumentDoc.delete();
  }

}
