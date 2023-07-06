import { Observable } from 'rxjs';
import { Type } from '@angular/core';
import { Datasource, DatasourceData, FormattedData, ReplaceInfo } from '@app/shared/models/widget.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
export declare function onParentScrollOrWindowResize(el: Node): Observable<Event>;
export declare function isLocalUrl(url: string): boolean;
export declare function animatedScroll(element: HTMLElement, scrollTop: number, delay?: number): void;
export declare function isUndefined(value: any): boolean;
export declare function isUndefinedOrNull(value: any): boolean;
export declare function isDefined(value: any): boolean;
export declare function isDefinedAndNotNull(value: any): boolean;
export declare function isEmptyStr(value: any): boolean;
export declare function isNotEmptyStr(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isNumeric(value: any): boolean;
export declare function isBoolean(value: any): boolean;
export declare function isString(value: any): boolean;
export declare function isArray(value: any): boolean;
export declare function isLiteralObject(value: any): boolean;
export declare function formatValue(value: any, dec?: number, units?: string, showZeroDecimals?: boolean): string | undefined;
export declare function objectValues(obj: any): any[];
export declare function deleteNullProperties(obj: any): void;
export declare function objToBase64(obj: any): string;
export declare function stringToBase64(value: string): string;
export declare function base64toString(b64Encoded: string): string;
export declare function objToBase64URI(obj: any): string;
export declare function base64toObj(b64Encoded: string): any;
export declare function checkNumericStringAndConvert(val: string): number | string;
export declare function hashCode(str: string): number;
export declare function objectHashCode(obj: any): number;
export declare function deepClone<T>(target: T, ignoreFields?: string[]): T;
export declare function extractType<T extends object>(target: any, keysOfProps: (keyof T)[]): T;
export declare const isEqual: (a: any, b: any) => boolean;
export declare const isEmpty: (a: any) => boolean;
export declare const isEqualIgnoreUndefined: (a: any, b: any) => boolean;
export declare const isArraysEqualIgnoreUndefined: (a: any[], b: any[]) => boolean;
export declare function mergeDeep<T>(target: T, ...sources: T[]): T;
export declare function guid(): string;
export declare function cloneMetadata<S, T>(sourceType: Type<S>, targetType: Type<T>): void;
export declare function snakeCase(name: string, separator: string): string;
export declare function getDescendantProp(obj: any, path: string): any;
export declare function insertVariable(pattern: string, name: string, value: any): string;
export declare function createLabelFromDatasource(datasource: Datasource, pattern: string): string;
export declare function formattedDataFormDatasourceData(input: DatasourceData[], dataIndex?: number): FormattedData[];
export declare function formattedDataArrayFromDatasourceData(input: DatasourceData[]): FormattedData[][];
export declare function formattedDataFromDatasource(datasource: Datasource, dsIndex: number): FormattedData;
export declare function flatFormattedData(input: FormattedData[]): FormattedData;
export declare function flatDataWithoutOverride(input: FormattedData[]): FormattedData;
export declare function mergeFormattedData(first: FormattedData[], second: FormattedData[]): FormattedData[];
export declare function processDataPattern(pattern: string, data: FormattedData): Array<ReplaceInfo>;
export declare function fillDataPattern(pattern: string, replaceInfo: Array<ReplaceInfo>, data: FormattedData): string;
export declare function createLabelFromPattern(pattern: string, data: FormattedData): string;
export declare function parseFunction(source: any, params?: string[]): (...args: any[]) => any;
export declare function safeExecute(func: (...args: any[]) => any, params?: any[]): any;
export declare function padValue(val: any, dec: number): string;
export declare function removeEmptyObjects(obj: object): object;
export declare function baseUrl(): string;
export declare function coapBaseUrl(dtlsEnabled: boolean): string;
export declare function generateId(length: number): string;
export declare function sortObjectKeys<T>(obj: T): T;
export declare function deepTrim<T>(obj: T): T;
export declare function generateSecret(length?: number): string;
export declare function validateEntityId(entityId: EntityId | null): boolean;
export declare function isMobileApp(): boolean;
export declare function randomAlphanumeric(length: number): string;
export declare function getEntityDetailsPageURL(id: string, entityType: EntityType): string;
export declare function parseHttpErrorMessage(errorResponse: HttpErrorResponse, translate: TranslateService, responseType?: string): {
    message: string;
    timeout: number;
};
export declare function genNextLabel(name: string, datasources: Datasource[]): string;
