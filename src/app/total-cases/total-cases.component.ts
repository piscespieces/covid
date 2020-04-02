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

  nfObject = new Intl.NumberFormat('en-US');

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data) => {
      this.incomingData = data

      this.totalObject = this.incomingData.slice(-1)[0]

      let formatTotalCases = parseInt(this.totalObject.total_cases.replace(",", ""))
      let formatTotalDeaths = parseInt(this.totalObject.total_deaths)
      let formatTotalRecov = parseInt(this.totalObject.total_recov)

      this.totalCases = this.nfObject.format(formatTotalCases)
      this.totalDeaths = this.nfObject.format(formatTotalDeaths)
      this.totalRecov = this.nfObject.format(formatTotalRecov)
    })
  }

}
