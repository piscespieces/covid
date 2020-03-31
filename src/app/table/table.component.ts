import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const COUNTRY_DATA = []

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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((dataJSON) => {
      this.countryJSON = dataJSON
      for (let countryObject of this.countryJSON) {
        COUNTRY_DATA.push
          ({
            position: this.counter,
            name: countryObject.country_name,
            cases: countryObject.total_cases.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            deaths: countryObject.total_deaths.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            recov: countryObject.total_recov.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            permill: countryObject.case_per_mill.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          })
        this.counter++
      }
      this.dataSource = new MatTableDataSource(COUNTRY_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }
}