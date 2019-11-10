import { Component, OnInit } from '@angular/core';
import { ZDocument } from 'src/app/models/DocumentModel';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: ZDocument[];

  constructor(private documentService: DocumentService) {

    documentService.getDocuments().subscribe(documents => {
        this.documents = documents;
    });

  }

  ngOnInit() {
  }

}
