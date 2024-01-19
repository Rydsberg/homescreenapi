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
import type { VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel } from './VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel';
import {
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel';
import type { VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel } from './VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel';
import {
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel';

/**
 * 
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel {
    /**
     * Flag indicating that an error occurred while getting ticket suggestions.
     * @type {boolean}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel
     */
    hasError?: boolean;
    /**
     * Ticket suggestions for a journey.
     * @type {Array<VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel>}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel
     */
    ticketSuggestions?: Array<VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel> | null;
    /**
     * An array with the tickets from the existingTickets-array in the post-body. Validity for the journey is indicated for each ticket in the array. Included if 'ticketsuggestions' is passed in the includes array in the request, otherwise null.
     * @type {Array<VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel>}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel
     */
    ticketValidities?: Array<VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel> | null;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel {
    return VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasError': !exists(json, 'hasError') ? undefined : json['hasError'],
        'ticketSuggestions': !exists(json, 'ticketSuggestions') ? undefined : (json['ticketSuggestions'] === null ? null : (json['ticketSuggestions'] as Array<any>).map(VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModelFromJSON)),
        'ticketValidities': !exists(json, 'ticketValidities') ? undefined : (json['ticketValidities'] === null ? null : (json['ticketValidities'] as Array<any>).map(VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModelFromJSON)),
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasError': value.hasError,
        'ticketSuggestions': value.ticketSuggestions === undefined ? undefined : (value.ticketSuggestions === null ? null : (value.ticketSuggestions as Array<any>).map(VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModelToJSON)),
        'ticketValidities': value.ticketValidities === undefined ? undefined : (value.ticketValidities === null ? null : (value.ticketValidities as Array<any>).map(VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModelToJSON)),
    };
}
