import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  // output turns it into an event that can be listended from outside
  // @Output() postCreated = new EventEmitter<Post>();

  ngOnInit(): void {

  }
  constructor(public postsService: PostsService) { }

  onAddPost(form: NgForm) {
    // this will prevent empty form from submitting
    if(form.invalid) {
      return;
    }
    console.log("dkjf", form.value.title)
    this.postsService.addPost(form.value.title, form.value.content)
    console.log("hell", this.postsService.getPosts())
    form.resetForm();
  }
}
