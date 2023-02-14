import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryPageService } from '../services/gallery-page.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor(private _gal: GalleryPageService, private param: ActivatedRoute) { }

  galleryInfo: any;
  getGalleryId: any;

  ngOnInit(): void {

    this.getGalleryId = this.param.snapshot.paramMap.get('Id'); 
    
    if (this.getGalleryId) {
      this.galleryInfo = this._gal.gallery.filter((value) => { 
        return value.Id == this.getGalleryId; 
      });
    }

  }
}
