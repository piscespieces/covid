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

      // Look for the object that has the country_name equals to 'Total:' which contains the total data
      this.totalObject = this.incomingData.filter(obj => {
        return (obj.country_name === 'Total:')
      })

      // this.totalObject is an array that only has in it 1 index (0), I gotta target it to get into the value it's keys
      let formatTotalCases = parseInt(this.totalObject[0].total_cases)
      let formatTotalDeaths = parseInt(this.totalObject[0].total_deaths)
      let formatTotalRecov = parseInt(this.totalObject[0].total_recov)

      this.totalCases = this.nfObject.format(formatTotalCases)
      this.totalDeaths = this.nfObject.format(formatTotalDeaths)
      this.totalRecov = this.nfObject.format(formatTotalRecov)
    })
  }

}
