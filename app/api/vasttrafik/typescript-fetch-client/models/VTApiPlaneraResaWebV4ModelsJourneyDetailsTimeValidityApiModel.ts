/* tslint:disable */
/* eslint-disable */
/**
 * Planera Resa
 * Sök och planera resor med Västtrafik
 *
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { VTApiPlaneraResaCoreModelsTimeValidityType } from './VTApiPlaneraResaCoreModelsTimeValidityType';
import {
    VTApiPlaneraResaCoreModelsTimeValidityTypeFromJSON,
    VTApiPlaneraResaCoreModelsTimeValidityTypeFromJSONTyped,
    VTApiPlaneraResaCoreModelsTimeValidityTypeToJSON,
} from './VTApiPlaneraResaCoreModelsTimeValidityType';
import type { VTApiPlaneraResaCoreModelsTimeValidityUnit } from './VTApiPlaneraResaCoreModelsTimeValidityUnit';
import {
    VTApiPlaneraResaCoreModelsTimeValidityUnitFromJSON,
    VTApiPlaneraResaCoreModelsTimeValidityUnitFromJSONTyped,
    VTApiPlaneraResaCoreModelsTimeValidityUnitToJSON,
} from './VTApiPlaneraResaCoreModelsTimeValidityUnit';

/**
 * Information about the time validity of a ticket suggestion.
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel {
    /**
     * 
     * @type {VTApiPlaneraResaCoreModelsTimeValidityType}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
     */
    type?: VTApiPlaneraResaCoreModelsTimeValidityType;
    /**
     * The amount of the unit specified by the Unit property. Always used together with the Unit property.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
     */
    amount?: number | null;
    /**
     * 
     * @type {VTApiPlaneraResaCoreModelsTimeValidityUnit}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
     */
    unit?: VTApiPlaneraResaCoreModelsTimeValidityUnit;
    /**
     * The from date of a date interval specified in RFC 3339 format. Always used together with the
     * ToDate property.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
     */
    fromDate?: string | null;
    /**
     * The to date of a date interval specified in RFC 3339 format. Always used together with the
     * FromDate property.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
     */
    toDate?: string | null;
    /**
     * The from time of a datetime interval specified in RFC 3339 format. Always used together with
     * the ToDateTime property.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
     */
    fromDateTime?: string | null;
    /**
     * The to time of a datetime interval specified in RFC 3339 format. Always used together with
     * the FromDateTime property.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel
     */
    toDateTime?: string | null;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel {
    return VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : VTApiPlaneraResaCoreModelsTimeValidityTypeFromJSON(json['type']),
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'unit': !exists(json, 'unit') ? undefined : VTApiPlaneraResaCoreModelsTimeValidityUnitFromJSON(json['unit']),
        'fromDate': !exists(json, 'fromDate') ? undefined : json['fromDate'],
        'toDate': !exists(json, 'toDate') ? undefined : json['toDate'],
        'fromDateTime': !exists(json, 'fromDateTime') ? undefined : json['fromDateTime'],
        'toDateTime': !exists(json, 'toDateTime') ? undefined : json['toDateTime'],
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': VTApiPlaneraResaCoreModelsTimeValidityTypeToJSON(value.type),
        'amount': value.amount,
        'unit': VTApiPlaneraResaCoreModelsTimeValidityUnitToJSON(value.unit),
        'fromDate': value.fromDate,
        'toDate': value.toDate,
        'fromDateTime': value.fromDateTime,
        'toDateTime': value.toDateTime,
    };
}

