import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { PeopleService } from '../../../../@core/data/remote/services/people.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss'],
})
export class AddPeopleComponent implements OnInit {
  @Input() public _person;
  @Input() public _isColab;
  public loading: boolean = false;
  public progress: number = 0;
  public files: File[] = [];
  public form: FormGroup;
  isColab = true;
  constructor(private _fb: FormBuilder,
    private _peopleService: PeopleService,
    private _dialog: NbDialogRef<AddPeopleComponent>) {

  }

  ngOnInit(): void {this.form = this._fb.group({
    id: [this._person?.id || ''],
    name: [this._person?.name || '', Validators.required],
    title: [this._person?.title, Validators.required],
    rg: [this._person?.rg || '', Validators.required],
    tag: [this._person?.tag || '', Validators.required],
    order: [this._person?.order || '', Validators.required],
  });    this.isColab = this._isColab;

  }
  onSubmit() {
    // Add layer
    const formData = this._peopleService.toFormData(this.form.value);
    if (this.files.length > 0) {
      formData.append('file', this.files[0]);
    }
    this.loading = true;
    this._peopleService.addPeople(formData)
    .subscribe({
      next: (event => {
        if ( event.type === HttpEventType.UploadProgress ) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }
        if ( event.type === HttpEventType.Response ) {
          this.form.reset();
          this._peopleService.showToast('top rigth', 'success', 'Persona Agregada correctamente');
          this.loading = false;
          this.progress = 0;
          this._dialog.close(event.body);
        }
      }),
      error: (error => {
        this._peopleService.showToast('top rigth', 'danger', error.message);
        this.loading = false;
        this.progress = 0;
      }),
    });
  }
 // File selector:

 onSelect(event) {
  this.files.push(...event.addedFiles);
  }
  onRemoveFile(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
