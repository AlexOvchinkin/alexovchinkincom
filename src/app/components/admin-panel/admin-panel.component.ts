import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../../services/api.service';
import { concat } from 'rxjs/operators';
import ITag from '../../interfaces/ITag';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  formGroup: FormGroup;
  error: string = '';
  tagsModeOpen: boolean = false;
  tags: ITag[] = [];

  constructor(private fb: FormBuilder, private apiService: APIService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
      source: ['', [Validators.required]],
      description: ['', [Validators.required]],
      text: ['', [Validators.required]],
      tag: ['']
    });

    this.setTags();
  }

  formSubmit(): void {
    if (this.formGroup.valid) {
      this.apiService.createNewArticle(this.formGroup.value)
        .subscribe(result => {
          this.formGroup.reset();
          this.error = '';
        },
          err => {
            this.error = 'error';
          });
    }
  }

  toggleDropdownTags(): void {
    this.tagsModeOpen = !this.tagsModeOpen;
  }

  setTags(): void {
    this.apiService.getTags()
      .subscribe(tags => this.tags = tags);
  }

  tagClick(tag): void {
    this.formGroup.controls['tag'].setValue(tag);
    this.toggleDropdownTags();
  }

  newTag(): void {
    const newTag = prompt('Type new TAG', '');
    this.apiService.addNewTag(newTag)
      .pipe(concat(this.apiService.getTags()))
      .subscribe(tags => this.tags = tags as ITag[]);
  }
}
