import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [
{
            id: 1,
            name: 'Angular: Forms',
            imageUrl: '',
            price: 99.99,
            code: 'XPS-879',
            duration: 120,
            rating: 5.4,
            releaseDate: 'December, 11, 2020',
},
{
            id: 2,
            name: 'Angular: Http',
            imageUrl: '',
            price: 45.99,
            code: 'LXL-1034',
            duration: 80,
            rating: 4,
            releaseDate: 'December, 11, 2020',


}
    ]



    }


}