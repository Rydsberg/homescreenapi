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
import type { VTApiPlaneraResaCoreModelsLocationType } from './VTApiPlaneraResaCoreModelsLocationType';
import {
    VTApiPlaneraResaCoreModelsLocationTypeFromJSON,
    VTApiPlaneraResaCoreModelsLocationTypeFromJSONTyped,
    VTApiPlaneraResaCoreModelsLocationTypeToJSON,
} from './VTApiPlaneraResaCoreModelsLocationType';
import type { VTApiPlaneraResaCoreModelsNote } from './VTApiPlaneraResaCoreModelsNote';
import {
    VTApiPlaneraResaCoreModelsNoteFromJSON,
    VTApiPlaneraResaCoreModelsNoteFromJSONTyped,
    VTApiPlaneraResaCoreModelsNoteToJSON,
} from './VTApiPlaneraResaCoreModelsNote';

/**
 * Information about an endpoint on an access link.
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel {
    /**
     * The 16-digit Västtrafik gid.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    gid?: string | null;
    /**
     * The location name.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    name: string;
    /**
     * 
     * @type {VTApiPlaneraResaCoreModelsLocationType}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    locationType: VTApiPlaneraResaCoreModelsLocationType;
    /**
     * The WGS84 latitude of the location.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    latitude?: number | null;
    /**
     * The WGS84 longitude of the location.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    longitude?: number | null;
    /**
     * The planned time in RFC 3339 format.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    plannedTime: string;
    /**
     * The estimated time in RFC 3339 format.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    estimatedTime?: string | null;
    /**
     * The best known time of the link in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    readonly estimatedOtherwisePlannedTime?: string | null;
    /**
     * An ordered list (most important first) of notes related to the end point.
     * @type {Array<VTApiPlaneraResaCoreModelsNote>}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel
     */
    notes?: Array<VTApiPlaneraResaCoreModelsNote> | null;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "locationType" in value;
    isInstance = isInstance && "plannedTime" in value;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel {
    return VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gid': !exists(json, 'gid') ? undefined : json['gid'],
        'name': json['name'],
        'locationType': VTApiPlaneraResaCoreModelsLocationTypeFromJSON(json['locationType']),
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'plannedTime': json['plannedTime'],
        'estimatedTime': !exists(json, 'estimatedTime') ? undefined : json['estimatedTime'],
        'estimatedOtherwisePlannedTime': !exists(json, 'estimatedOtherwisePlannedTime') ? undefined : json['estimatedOtherwisePlannedTime'],
        'notes': !exists(json, 'notes') ? undefined : (json['notes'] === null ? null : (json['notes'] as Array<any>).map(VTApiPlaneraResaCoreModelsNoteFromJSON)),
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gid': value.gid,
        'name': value.name,
        'locationType': VTApiPlaneraResaCoreModelsLocationTypeToJSON(value.locationType),
        'latitude': value.latitude,
        'longitude': value.longitude,
        'plannedTime': value.plannedTime,
        'estimatedTime': value.estimatedTime,
        'notes': value.notes === undefined ? undefined : (value.notes === null ? null : (value.notes as Array<any>).map(VTApiPlaneraResaCoreModelsNoteToJSON)),
    };
}
