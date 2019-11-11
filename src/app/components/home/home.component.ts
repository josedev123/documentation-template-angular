import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, documentService: DocumentService) {

documentService.getDocuments().subscribe(resp => {

  var firstDocSlug = resp[0].slug;

  this.router.navigate(['/view/'+firstDocSlug]) 


});

    
   }

  ngOnInit() {
  }

}
