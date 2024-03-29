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
import type { VTApiPlaneraResaCoreModelsNote } from './VTApiPlaneraResaCoreModelsNote';
import {
    VTApiPlaneraResaCoreModelsNoteFromJSON,
    VTApiPlaneraResaCoreModelsNoteFromJSONTyped,
    VTApiPlaneraResaCoreModelsNoteToJSON,
} from './VTApiPlaneraResaCoreModelsNote';
import type { VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel } from './VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel';
import {
    VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel';

/**
 * 
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel {
    /**
     * Journey reference
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
     */
    detailsReference?: string | null;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
     */
    line?: VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel;
    /**
     * Journey notes
     * @type {Array<VTApiPlaneraResaCoreModelsNote>}
     * @memberof VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
     */
    notes?: Array<VTApiPlaneraResaCoreModelsNote> | null;
    /**
     * Journey name
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
     */
    name?: string | null;
    /**
     * Journey direction
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
     */
    direction?: string | null;
    /**
     * Current latitude of journey
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
     */
    latitude?: number | null;
    /**
     * Current longitude of journey
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
     */
    longitude?: number | null;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel {
    return VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detailsReference': !exists(json, 'detailsReference') ? undefined : json['detailsReference'],
        'line': !exists(json, 'line') ? undefined : VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModelFromJSON(json['line']),
        'notes': !exists(json, 'notes') ? undefined : (json['notes'] === null ? null : (json['notes'] as Array<any>).map(VTApiPlaneraResaCoreModelsNoteFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
    };
}

export function VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detailsReference': value.detailsReference,
        'line': VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModelToJSON(value.line),
        'notes': value.notes === undefined ? undefined : (value.notes === null ? null : (value.notes as Array<any>).map(VTApiPlaneraResaCoreModelsNoteToJSON)),
        'name': value.name,
        'direction': value.direction,
        'latitude': value.latitude,
        'longitude': value.longitude,
    };
}

