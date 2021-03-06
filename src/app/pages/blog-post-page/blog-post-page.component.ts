import { FirebaseObjectObservable } from 'angularfire2';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

import { BlogService } from '../../core/database/blog.service';
import { BlogPost, EditBlogPost } from '../../core/interfaces/blog-post';

@Component({
  selector: 'app-blog-post-page',
  styleUrls: ['./blog-post-page.component.scss'],
  templateUrl: './blog-post-page.component.html'
})
export class BlogPostPageComponent implements OnInit, AfterViewInit {

  post$: FirebaseObjectObservable<BlogPost>;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loadBlog();
    this.scrollToTop();
  }

  ngAfterViewInit() {
    this.addView();
  }

  addView() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.blogService.addViewForBlog(id);
    });
  }

  loadBlog(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.post$ = this.blogService.getBlog(id);
    });
  }

  scrollToTop(): void {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
     window.scroll(0, 0);
   });
  }

  blogEdited(editedPost: EditBlogPost) {
    this.route.params.forEach((params: Params) => {
      this.blogService.updateBlog(params['id'], editedPost).then(() => {});
    });

  }

}
