import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router'

import { RestaurantsService } from 'app/restaurants/restaurants.service';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews : Observable<any>
  
  constructor(private restaurantsServices : RestaurantsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsServices.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
