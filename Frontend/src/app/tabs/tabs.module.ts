// import { IonicModule } from '@ionic/angular';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { TabsPageRoutingModule } from './tabs-routing.module';

// import { TabsPage } from './tabs.page';

// @NgModule({
//   imports: [
//     IonicModule,
//     CommonModule,
//     FormsModule,
//     TabsPageRoutingModule
//   ],
//   declarations: [TabsPage]
// })
// export class TabsPageModule {}


import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { File } from '@ionic-native/file/ngx'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs_homePage } from './tabs-homePage.page';
import { Tabs_upload} from './tabs-upload.page';
import { Tabs_match } from './tabs-match.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: Tabs_homePage,
      },
      {
        path: 'Upload', component: Tabs_upload
      },
      {
        path: 'Match', component: Tabs_match
      }
    ])
  ],
  declarations: [Tabs_homePage, Tabs_upload, Tabs_match],
  providers: [
    File,
  ] 
})
export class TabsPageModule { }
