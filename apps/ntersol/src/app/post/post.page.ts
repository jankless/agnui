import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Posts } from '../posts/posts.page';

@Component({
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPage {
  id: string = this.route.snapshot.paramMap.get('id') || '';
  post: Observable<any> = this.http
    .get<Posts>('assets/config/posts.json', { responseType: 'json' })
    .pipe(
      switchMap((res) => {
        const post = res.posts.find((post) => post.id === +this.id);
        return this.http.get(`assets/posts/${post?.file}`, {
          responseType: 'text',
        });
      })
    );
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
}
