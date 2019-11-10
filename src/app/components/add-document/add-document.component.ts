import { Component, OnInit } from '@angular/core';
import { ZDocument } from 'src/app/models/DocumentModel';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';
import { slugify } from 'src/app/utilities/slugify';


@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

document: ZDocument = {
  title : '',
  content: ''

};

  constructor(private flashMessage: FlashMessagesService, private documentService: DocumentService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: ZDocument, valid: boolean}) {

    if (!valid) {
      // show error
      this.flashMessage.show('Please fill the title', {
        cssClass: 'alert-danger', timeout: 4000
      });

    } else {

      value.slug = slugify(value.title);
      console.log(value);
      this.documentService.newDocument(value);

      this.flashMessage.show('New client added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // redirect to dashboard
      this.router.navigate(['/dashboard']);

    }

  }

}
