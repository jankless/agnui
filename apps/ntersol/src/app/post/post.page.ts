import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import fm from 'front-matter';
import { map, Observable, switchMap } from 'rxjs';
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
      }),
      map((res) => {
        let result = fm(res) as any;
        console.log(result.attributes);
        console.log(result.attributes.title);
        return result.body;
      })
    );
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
}
