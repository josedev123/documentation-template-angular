import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { ZDocument } from 'src/app/models/DocumentModel';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-navigation',
  templateUrl: './view-navigation.component.html',
  styleUrls: ['./view-navigation.component.css']
})
export class ViewNavigationComponent implements OnInit {



   xdocuments: ZDocument[];

  constructor(private documentService: DocumentService, private afs: AngularFirestore) {

    afs.collection('/blueprint-1').valueChanges().subscribe(xdocuments => {
        this.xdocuments = xdocuments;
    });

  }


  ngOnInit() {
  }

}
