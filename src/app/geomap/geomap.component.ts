import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.scss']
})
export class GeomapComponent implements OnInit {

  countryJSON;
  data = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((dataJSON) => {
      this.countryJSON = dataJSON
      for (let countryObject of this.countryJSON) {
        // Formatting "USA" name to "United States"
        if (countryObject.country_name === "USA") {
          countryObject.country_name = "United States"
        }
        // If there is no deaths, instead of NaN, display the int 0
        if (countryObject.total_deaths === "") {
          countryObject.total_deaths = 0
        }
        //Pushing every object (Country) to a formatted array to be readable for the GeoMaps API
        this.data.push(
          [
            countryObject.country_name,
            parseInt(countryObject.total_cases),
            parseInt(countryObject.total_deaths)
          ])
      }
    })
  }

  type = 'GeoChart'
  columnNames = ["Country", "Cases", "Deaths"]
  options = {
    colorAxis: {
      values: [1, 10, 100, 1000, 10000, 11000],
      colors: ['#FFFFCC', '#FFCC00', '#FF9900', '#FF6600', 'FF3300', '#CC0000']
    },
    legend: { textStyle: { italic: true } }
  }

  width = 750;
  height = 600;
}
