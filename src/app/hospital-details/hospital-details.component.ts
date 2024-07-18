import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { ActivatedRoute } from '@angular/router';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  id!: number;
  hospitals!: Hospital;
  constructor(private route: ActivatedRoute, private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hospitals = new Hospital();
    this.hospitalService.getHospitalById(this.id).subscribe( data => {
      this.hospitals = data;
    });
  }
}
