import { NgModule } from "@angular/core";
import { EstateLevelRoutingModule } from "./estate-level.routing.module";

import { UsaComponent } from "./usa/usa.component";

@NgModule({
  imports: [EstateLevelRoutingModule],
  declarations: [UsaComponent],
})
export class EstateLevelModule {}
