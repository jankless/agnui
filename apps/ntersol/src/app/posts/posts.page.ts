import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';

export interface Post {
  id: number;
  title: string;
  date: Date;
  file: string;
}

export interface Posts {
  posts: Post[];
}

@Component({
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPage {
  posts: Observable<Posts> = this.http
    .get<Posts>('assets/config/posts.json', {
      responseType: 'json',
    })
    .pipe(
      tap((res) => {
        console.log(res);
        return res;
      })
    );

  constructor(private http: HttpClient) {}
}
