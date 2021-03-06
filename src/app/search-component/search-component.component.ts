import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../module/blog';
import { Register } from '../module/register';
import { BlogService } from '../service/blog.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  users: Register[];
  blogs: Blog[];
  constructor(public ar: ActivatedRoute,
              public blogservice: BlogService,
              public userService: RegisterService
              ){ }

  ngOnInit(): void {
    let searched: string = "";

    this.ar.params.subscribe( a => {searched = a['searched']})
    this.blogservice.searchBlog(searched).subscribe( a => {this.blogs = a;})
    this.userService.searchUser(searched).subscribe( a => {this.users = a;})
  }
}
