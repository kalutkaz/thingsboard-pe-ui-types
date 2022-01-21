import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { ComplexFilterPredicateInfo, ComplexOperation } from '@shared/models/query/query.models';
import { ComplexFilterPredicateDialogData } from '@home/components/filter/filter-component.models';
import * as i0 from "@angular/core";
export declare class ComplexFilterPredicateDialogComponent extends DialogComponent<ComplexFilterPredicateDialogComponent, ComplexFilterPredicateInfo> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: ComplexFilterPredicateDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ComplexFilterPredicateDialogComponent, ComplexFilterPredicateInfo>;
    private fb;
    complexFilterFormGroup: FormGroup;
    complexOperations: string[];
    complexOperationEnum: typeof ComplexOperation;
    complexOperationTranslations: Map<ComplexOperation, string>;
    isAdd: boolean;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: ComplexFilterPredicateDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ComplexFilterPredicateDialogComponent, ComplexFilterPredicateInfo>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComplexFilterPredicateDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComplexFilterPredicateDialogComponent, "tb-complex-filter-predicate-dialog", never, {}, {}, never, never>;
}