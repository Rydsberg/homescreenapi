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
import type { VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel } from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel';
import {
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel';
import type { VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel } from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel';
import {
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel';
import type { VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel } from './VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel';
import {
    VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel';

/**
 * 
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel {
    /**
     * A reference that should be used when getting detailed information about the journey.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    detailsReference?: string | null;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    serviceJourney?: VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    stopPoint: VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel;
    /**
     * The planned time of the call in RFC 3339 format.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    plannedTime: string;
    /**
     * The estimated time of the call in RFC 3339 format.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    estimatedTime?: string | null;
    /**
     * The best known time of the call in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    readonly estimatedOtherwisePlannedTime?: string | null;
    /**
     * Flag indicating if the departure or arrival is cancelled.
     * @type {boolean}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    isCancelled?: boolean;
    /**
     * Flag indicating if the departure or arrival is partially cancelled.
     * @type {boolean}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    isPartCancelled?: boolean;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
     */
    occupancy?: VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stopPoint" in value;
    isInstance = isInstance && "plannedTime" in value;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel {
    return VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detailsReference': !exists(json, 'detailsReference') ? undefined : json['detailsReference'],
        'serviceJourney': !exists(json, 'serviceJourney') ? undefined : VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModelFromJSON(json['serviceJourney']),
        'stopPoint': VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModelFromJSON(json['stopPoint']),
        'plannedTime': json['plannedTime'],
        'estimatedTime': !exists(json, 'estimatedTime') ? undefined : json['estimatedTime'],
        'estimatedOtherwisePlannedTime': !exists(json, 'estimatedOtherwisePlannedTime') ? undefined : json['estimatedOtherwisePlannedTime'],
        'isCancelled': !exists(json, 'isCancelled') ? undefined : json['isCancelled'],
        'isPartCancelled': !exists(json, 'isPartCancelled') ? undefined : json['isPartCancelled'],
        'occupancy': !exists(json, 'occupancy') ? undefined : VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelFromJSON(json['occupancy']),
    };
}

export function VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detailsReference': value.detailsReference,
        'serviceJourney': VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModelToJSON(value.serviceJourney),
        'stopPoint': VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModelToJSON(value.stopPoint),
        'plannedTime': value.plannedTime,
        'estimatedTime': value.estimatedTime,
        'isCancelled': value.isCancelled,
        'isPartCancelled': value.isPartCancelled,
        'occupancy': VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelToJSON(value.occupancy),
    };
}

