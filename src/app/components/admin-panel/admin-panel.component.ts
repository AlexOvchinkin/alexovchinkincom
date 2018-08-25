import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdministrationService } from '../../services/administration.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdministrationService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
      source: ['', [Validators.required]],
      description: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

  formSubmit(): void {
    if (this.formGroup.valid) {
      this.adminService.createNewArticle(this.formGroup.value);
    }
  }

}
