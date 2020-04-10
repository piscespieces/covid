import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'

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
      // console.log(this.incomingData)

      let total_deaths_counter = 0;
      let total_cases_counter = 0;
      let total_recovered_counter = 0;

      for (let country of this.incomingData) {
        let cases = country.total_cases
        let deaths = parseInt(country.total_deaths)
        let recov = parseInt(country.total_recov)

        if (isNaN(deaths)) {
          deaths = 0;
        }
        if (isNaN(recov)) {
          recov = 0;
        }

        total_cases_counter += cases
        total_deaths_counter += deaths
        total_recovered_counter += recov
      }

      this.totalCases = this.nfObject.format(total_cases_counter)
      this.totalDeaths = this.nfObject.format(total_deaths_counter)
      this.totalRecov = this.nfObject.format(total_recovered_counter)
    })
  }

}
