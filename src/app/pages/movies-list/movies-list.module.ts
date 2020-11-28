import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MoviesListPageRoutingModule} from './movies-list-routing.module';

import {MoviesListPage} from './movies-list.page';
import {HttpClientModule} from '@angular/common/http';
import {ImdbService} from '../../services/imdb.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MoviesListPageRoutingModule,
        HttpClientModule
    ],
    declarations: [MoviesListPage],
    providers: [ImdbService]
})
export class MoviesListPageModule {
}
