import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandDetailsService } from '../services/brand-details.service';

@Component({
  selector: 'app-brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent implements OnInit {
  constructor(
    private param: ActivatedRoute,
    private service: BrandDetailsService,
    
  ) {}

  brandData: any;
  getBrandId: any;
  ngOnInit(): void {
    this.getBrandId = this.param.snapshot.paramMap.get('id');
    if (this.getBrandId) {
      this.brandData = this.service.brandDetails.filter((value) => {
        return value.id == this.getBrandId;
      });
    }
  }
}
