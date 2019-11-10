import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { ZDocument } from 'src/app/models/DocumentModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  documents: ZDocument[];

  constructor(private documentService: DocumentService) {

    documentService.getDocuments().subscribe(documents => {
        this.documents = documents;
    });

  }

  ngOnInit() {
  }

}
