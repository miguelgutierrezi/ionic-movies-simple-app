import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ImdbService {

    private readonly BASE_URL = environment.imdbUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    public getMostPopularMovies(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.http.get(`${this.BASE_URL}MostPopularMovies/${environment.apiKey}`).subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }

    public getMovies(expression: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.http.get(`${this.BASE_URL}SearchMovie/${environment.apiKey}/${expression}`).subscribe((response) => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
}
