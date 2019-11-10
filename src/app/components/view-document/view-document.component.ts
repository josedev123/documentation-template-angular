import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ZDocument } from 'src/app/models/DocumentModel';
import { Subscription } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent implements OnInit, OnDestroy {

  slug;
  zzDocument: ZDocument = {
    title: '',
    content: ''
  };

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.documentService.getDocumentBySlug(params.get('slug')))
    ).subscribe(
      resp => {
        this.zzDocument = resp[0];
      }
    );


        // tslint:disable-next-line:only-arrow-functions


  }

  ngOnDestroy() {

  }

}
