import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  AfterViewInit,
  Input
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {} from '@types/googlemaps';

@Component({
  selector: 'AutocompleteComponent',
  templateUrl: './google-places.component.html',

})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext', { static: false }) addresstext: any;
  @Input() autocompleteInput: string

  options = {
    bounds: new google.maps.LatLngBounds(
       new google.maps.LatLng(59.781883, 29.921997),
      new google.maps.LatLng(60.077042, 30.574000)
     
    ),
    types: ['address'],
    componentRestrictions: { country: 'RU' },
    strictBounds:true
  };

  queryWait: boolean;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.addresstext.nativeElement,
      // {
      //     componentRestrictions: { country: 'RU' },
      //     types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
      // });
      this.options
    );
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      // this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }

  changeAddress(event){
    this.setAddress.emit(event.target.value)
  }
}
