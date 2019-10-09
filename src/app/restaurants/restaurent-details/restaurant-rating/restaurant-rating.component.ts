import { Component, OnInit, forwardRef, Input, HostBinding,ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RestaurentService } from 'src/app/services/restaurant.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { initTransferState } from '@angular/platform-browser/src/browser/transfer_state';
import { DataStorageService } from 'src/app/services/data-storage.service';
@Component({
  selector: 'app-restaurant-rating',
  templateUrl: './restaurant-rating.component.html',
  styleUrls: ['./restaurant-rating.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RestaurantRatingComponent),
    multi: true
  }]
})
export class RestaurantRatingComponent implements OnInit {

constructor(private restaurant :RestaurentService, private route: ActivatedRoute,private router: Router,private dataService: DataStorageService) { }

  stars: boolean[] = Array(5).fill(true);
  @ViewChild ('f')formToEdit :NgForm;
  id:number;
  usrRate: number = 0;
 @Input() disabled = false;
 @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 1 : 1;
  }
 onChange = (rating: number) => {
  };
  onTouched = () => {
  };
  get value(): number {
    if(!this.disabled){
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
    }
  }
  rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }
 writeValue(rating: number): void {
    if (!this.disabled) {
      this.stars = this.stars.map((_, i) => rating > i);
      this.onChange(this.value);
      this.usrRate = this.value;
      console.log(this.usrRate);
      this.restaurant.setRate(this.usrRate);
    }
  }
 registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  ngOnInit() {
    this.id= this.restaurant.getIndex();
      console.log("index service:" + this.id);
  }
}
