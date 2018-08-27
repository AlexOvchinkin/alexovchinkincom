import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import IProfileProject from '../../interfaces/IProfileProject';

@Component({
  selector: 'app-projects-carousel',
  templateUrl: './projects-carousel.component.html',
  styleUrls: ['./projects-carousel.component.scss']
})
export class ProjectsCarouselComponent implements OnInit {

  projects: IProfileProject[] = [];
  currentProject: number = 0;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getProjects()
      .subscribe(data => {
        this.projects = data;
      });
  }

  /*
  / handler onClick button "PreviousProject"
  */
  clickPrevious(): void {
    this.currentProject = this.currentProject >= 1 ? this.currentProject - 1 : 0;
    this.setActiveProject(this.currentProject);
  }

  /*
  / handler onClick button "NextProject"
  */
  clickNext(): void {
    const isLast = this.currentProject === this.projects.length - 1;
    this.currentProject = isLast ? 0 : this.currentProject + 1;

    this.setActiveProject(this.currentProject);
  }

  setActiveProject(position: number): void {
    for(let i = 0; i < this.projects.length; i++) {
      this.projects[i].active = i === position ? true : false;
    }
  }

}
