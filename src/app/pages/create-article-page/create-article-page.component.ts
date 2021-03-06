import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BlogPost } from '../../core/interfaces/blog-post';

import { AuthService } from './../../core/auth/auth.service';
import { BlogService } from '../../core/database/blog.service';
import { BlogCategoryService } from '../../core/database/blog-category.service';
import { RandomService } from '../../core/utility/random.service';

import { BlogArticle } from '../../shared/blog-creator/blog-creator.component';

@Component({
  selector: 'app-create-article-page',
  styleUrls: ['./create-article-page.component.scss'],
  templateUrl: './create-article-page.component.html'
})
export class CreateArticlePageComponent implements OnInit, OnDestroy {

  public blogCatSubscription: Subscription;
  public autoCompleteTagList: string[] = [];

  constructor(public blogService: BlogService,
              public blogCategoryService: BlogCategoryService,
              public randomService: RandomService,
              public router: Router,
              public authService: AuthService) { }

  public ngOnInit() {
    this.loadAutoCompleteTagList();
  }

  public ngOnDestroy() {
    this.blogCatSubscription.unsubscribe();
  }

  public loadAutoCompleteTagList(): void {

    this.blogCatSubscription = this.blogCategoryService.getCategorySnapshot().subscribe(
      snapshots => {
        this.autoCompleteTagList = [];
        snapshots.forEach(snapshot => {
          this.autoCompleteTagList.push(snapshot.val().name);
        });
      },
      error => {
        console.log('loadAutoCompleteTagList: error');
      },
      () => {
        console.log('loadAutoCompleteTagList: complete');
      }
    );
  }

  public addStory(article: BlogArticle): void {

    let testPost: BlogPost = this.blogService.createFakeBlogPost();
    testPost.title = article.title;
    testPost.author = article.author;
    testPost.description = article.description;
    testPost.articleContent = article.html;

    this.blogService.createBlog(testPost).then((submittedArticle: firebase.database.ThenableReference) => {
      this.openBlogPage(submittedArticle.key);
    });

  }

  public openBlogPage(blogKey: string) {
    this.router.navigate(['/blogpost', blogKey]);
  }

  public tagAdded(val: string): void {

    if (this.autoCompleteTagList.indexOf(val) === -1) {
      console.log(val);
      console.log(this.autoCompleteTagList);
      this.blogCategoryService.addBlogCategory(val);
    }
  }

}
