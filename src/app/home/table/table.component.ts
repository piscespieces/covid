import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

let COUNTRY_DATA = []

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  countryJSON;
  displayedColumns: string[] = ['position', 'name', 'cases', 'deaths', 'recov', 'permill'];
  dataSource;
  counter = 1;

  nfObject = new Intl.NumberFormat('en-US'); // Necessary to format thousand separators in numbers
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((dataJSON) => {
      this.countryJSON = dataJSON
      for (let countryObject of this.countryJSON) {

        // countryObject is the index, that in this case contains an object
        // that comes with country_name, total_cases, and so on...
        // They come as a string from the API, for each numeric value to work
        // in the Angular Table they need to be type of number
        // That's why I'm using the function parseInt()

        let totalCases = parseInt(countryObject.total_cases)
        let totalDeaths = parseInt(countryObject.total_deaths)
        let totalRecov = parseInt(countryObject.total_recov)
        let casesPerMill = parseInt(countryObject.case_per_mill)

        COUNTRY_DATA.push
          ({
            position: this.counter,
            name: countryObject.country_name,
            cases: this.nfObject.format(totalCases),
            deaths: isNaN(totalDeaths) ? "0" : this.nfObject.format(totalDeaths), // They come as strings from the API, some of them are "" empty strings, after converted tu type of number they will become NaN and if so, I gotta display some string value, in this case "0"
            recov: isNaN(totalRecov) ? "0" : this.nfObject.format(totalRecov),
            permill: isNaN(casesPerMill) ? "0" : this.nfObject.format(casesPerMill),
          })
        this.counter++
      }
      this.dataSource = new MatTableDataSource(COUNTRY_DATA);
      COUNTRY_DATA = [];
      this.dataSource.paginator = this.paginator;
    })
  }
}