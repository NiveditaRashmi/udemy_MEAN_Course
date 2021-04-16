import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  // output turns it into an event that can be listended from outside
  @Output() postCreated = new EventEmitter<Post>();

  ngOnInit(): void {
  }
  constructor() { }

  onAddPost(form: NgForm) {
    // this will prevent empty form from submitting
    if(form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title, content: form.value.content
    };
    console.log("save clicked", post)
    this.postCreated.emit(post);
  }

  /* onAddPost() {
    const post: Post = {
      title: this.enteredTitle, content: this.enteredContent
    };
    console.log("save clicked", post)
    this.postCreated.emit(post);
  } */

  //enteredValue = '';
  //newPost = 'No Content';

  /* newPost = '';
  onAddPost(postInput: HTMLTextAreaElement) {
    // alert('Post added!');
    // this.newPost = "The user's first post!"
    console.log(postInput);
    console.dir(postInput);
    this.newPost = postInput.value;
  } */

  /* onAddPost() {
    this.newPost = this.enteredValue;
  } */
}
