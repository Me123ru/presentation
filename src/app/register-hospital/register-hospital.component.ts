import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-hospital',
  templateUrl: './register-hospital.component.html',
  styleUrls: ['./register-hospital.component.css']
})
export class RegisterHospitalComponent implements OnInit {

  hospital: Hospital = new Hospital();
  constructor(private hospitalService: HospitalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveHospital(){
    this.hospitalService.registerHospital(this.hospital).subscribe( data =>{
      console.log(data);
      this.goToHospitalList();

      alert("Hospital Successful Registered!")
    },
      error => {
        alert("Fail to Register Hospital!")
      });
  }

  goToHospitalList(){
    this.router.navigate(['/hospitals']);
  }

  onSubmit(){
    console.log(this.hospital);
    this.saveHospital();
  }
}
