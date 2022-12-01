import { Component, OnInit, SimpleChanges, OnChanges, Output } from '@angular/core';
import { Post } from '../post';
import { getFilteredPosts, changeActiveStatus } from '../post-service.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit, OnChanges {


    posts: Post[] = []


    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        this.posts = getFilteredPosts(true);
        console.log(this.posts);
    }

    ngOnInit(): void {
        this.posts = getFilteredPosts(true);
        console.log(this.posts);
    }

    changeActiveStatus(id: number): void {
        changeActiveStatus(id);
        this.posts = getFilteredPosts(true);
    }


}
