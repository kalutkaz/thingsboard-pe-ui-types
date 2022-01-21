import { AfterViewInit, ElementRef, OnInit, QueryList } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { ContentType } from '@shared/models/constants';
import { JsonContentComponent } from '@shared/components/json-content.component';
import { RuleChainService } from '@core/http/rule-chain.service';
import * as i0 from "@angular/core";
export interface NodeScriptTestDialogData {
    script: string;
    scriptType: string;
    functionTitle: string;
    functionName: string;
    argNames: string[];
    msg?: any;
    metadata?: {
        [key: string]: string;
    };
    msgType?: string;
    helpId?: string;
}
export declare class NodeScriptTestDialogComponent extends DialogComponent<NodeScriptTestDialogComponent, string> implements OnInit, AfterViewInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: NodeScriptTestDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<NodeScriptTestDialogComponent, string>;
    fb: FormBuilder;
    private ruleChainService;
    width: string;
    height: string;
    topPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    topLeftPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    topRightPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    bottomPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    bottomLeftPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    bottomRightPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    payloadContent: JsonContentComponent;
    nodeScriptTestFormGroup: FormGroup;
    functionTitle: string;
    submitted: boolean;
    contentTypes: typeof ContentType;
    constructor(store: Store<AppState>, router: Router, data: NodeScriptTestDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<NodeScriptTestDialogComponent, string>, fb: FormBuilder, ruleChainService: RuleChainService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private initSplitLayout;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    test(): void;
    private testNodeScript;
    private checkInputParamErrors;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NodeScriptTestDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NodeScriptTestDialogComponent, "tb-node-script-test-dialog", never, {}, {}, never, never>;
}