import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Post } from '../post';
import { getFilteredPosts, changeActiveStatus } from '../post-service.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit, OnChanges {

    posts: Post[] = [];

    constructor() {

    }
    ngOnChanges(changes: SimpleChanges): void {
        this.posts = getFilteredPosts(false);
    }

    ngOnInit(): void {
        this.posts = getFilteredPosts(false);
    }

    changeActiveStatus(id:number):void {
        changeActiveStatus(id);
        this.posts = getFilteredPosts(false);
    }

}
