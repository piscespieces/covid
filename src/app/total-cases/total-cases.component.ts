import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.scss']
})
export class TotalCasesComponent implements OnInit {

  // To handle Api Call
  incomingData;
  totalObject;

  // Values to display
  totalCases;
  totalDeaths;
  totalRecov;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data) => {
      this.incomingData = data
      this.totalObject = this.incomingData.slice(-1)[0]
      this.totalCases = this.totalObject.total_cases.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      this.totalDeaths = this.totalObject.total_deaths.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      this.totalRecov = this.totalObject.total_recov.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    })
  }

}
