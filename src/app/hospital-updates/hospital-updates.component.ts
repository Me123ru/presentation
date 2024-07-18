import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospital-updates',
  templateUrl: './hospital-updates.component.html',
  styleUrls: ['./hospital-updates.component.css']
})
export class HospitalUpdatesComponent implements OnInit {

  id!: number;
  hospital: Hospital = new Hospital();
  
  constructor(private hospitalService: HospitalService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hospitalService.getHospitalById(this.id).subscribe(data => {
      this.hospital = data;
    },
      error => {
      });
  }

  onSubmit(){
    this.hospitalService.updateHospital(this.id, this.hospital).subscribe( data =>{
      this.goToHospitalList();
    }
    , error => console.log(error));
  }

  goToHospitalList(){
    this.router.navigate(['/hospitals']);
  }
}
