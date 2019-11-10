import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ZDocument } from 'src/app/models/DocumentModel';
import { DocumentService } from 'src/app/services/document.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { FlashMessagesService } from 'angular2-flash-messages';
import { slugify } from 'src/app/utilities/slugify';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {

  id: string;
  document: ZDocument = {
    id: '',
    content: '',
    slug: '',
    title: '',
    order: 0
  };

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.documentService.getDocument(this.id).subscribe( document => {
      this.document = document;
    } );
  }

  onSubmit({value, valid}: {value: ZDocument, valid: boolean}) {

    if (!valid) {
      // show error
      this.flashMessage.show('Please fill the title', {
        cssClass: 'alert-danger', timeout: 4000
      });

    } else {

      value.slug = slugify(value.title);
      value.id = this.route.snapshot.params.id;

      if (!value.content){
        value.content = '';
      }

      console.log(value);
      this.documentService.updateDocument(value);

      this.flashMessage.show('Updated' + value.title, {
        cssClass: 'alert-success', timeout: 4000
      });
      // redirect to dashboard

    }

  }


}
