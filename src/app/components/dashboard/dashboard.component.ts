import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { ZDocument } from 'src/app/models/DocumentModel';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  documents: ZDocument[];

  constructor(private documentService: DocumentService, private afs: AngularFirestore) {

    documentService.getDocuments().subscribe(documents => {
        this.documents = documents;
    });

  }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.documents, event.previousIndex, event.currentIndex);

    for (let index = 0; index < this.documents.length; index++) {
        this.afs.collection('blueprint-1').doc((this.documents[index].id)).set({order : index}, { merge: true });
    }

  }
}
