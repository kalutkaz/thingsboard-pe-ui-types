import { ChangeDetectorRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export declare class ColorInputComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private dialogs;
    private translate;
    private fb;
    private cd;
    asBoxInput: boolean;
    icon: string;
    label: string;
    requiredText: string;
    useThemePalette: boolean;
    private colorClearButtonValue;
    get colorClearButton(): boolean;
    set colorClearButton(value: boolean);
    private openOnInputValue;
    get openOnInput(): boolean;
    set openOnInput(value: boolean);
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private modelValue;
    private propagateChange;
    colorFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, dialogs: DialogService, translate: TranslateService, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    private updateModel;
    showColorPicker(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorInputComponent, "tb-color-input", never, { "asBoxInput": "asBoxInput"; "icon": "icon"; "label": "label"; "requiredText": "requiredText"; "useThemePalette": "useThemePalette"; "colorClearButton": "colorClearButton"; "openOnInput": "openOnInput"; "required": "required"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
