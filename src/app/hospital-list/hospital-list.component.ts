import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  hospitals!: Hospital[];

  constructor(private hospitalService: HospitalService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHospital();
  }

  private getHospital(){
    this.hospitalService.getHospitalList().subscribe(data => {
      this.hospitals = data;
    });
  }

  hospitalDetails(id: number){
    this.router.navigate(['hospital-details', id]);
  }

  updateHospital(id: number){
    this.router.navigate(['hospital-updates', id]);
  }

  deleteHospital(id: number){
    this.hospitalService.deleteHospital(id).subscribe( data => {
      console.log(data);
      this.getHospital();
      alert("Hospital Deleted Successful!")
    },
    error => {
      alert("Fail to Delete Hospital!")
    });
  }
}
