import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsaComponent } from "./usa/usa.component";

const estateLevelRoutes: Routes = [
  {
    path: "USA",
    component: UsaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(estateLevelRoutes)],
  exports: [RouterModule],
})
export class EstateLevelRoutingModule {}
