import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { PostPage } from './post.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':id', component: PostPage }]),
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [PostPage],
  exports: [PostPage],
})
export class PostPageModule {}
