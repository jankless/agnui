import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsPage } from './posts.page';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PostsPage }]),
    HttpClientModule,
  ],
  declarations: [PostsPage],
  exports: [PostsPage],
})
export class PostsPageModule {}
