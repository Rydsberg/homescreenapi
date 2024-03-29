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


/**
 * Specifies an orientation of a link segment.
 * @export
 */
export const VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation = {
    Unknown: 'unknown',
    North: 'north',
    South: 'south',
    East: 'east',
    West: 'west',
    Northeast: 'northeast',
    Southeast: 'southeast',
    Northwest: 'northwest',
    Southwest: 'southwest'
} as const;
export type VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation = typeof VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation[keyof typeof VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation];


export function VTApiPlaneraResaWebV4ModelsLinkSegmentOrientationFromJSON(json: any): VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation {
    return VTApiPlaneraResaWebV4ModelsLinkSegmentOrientationFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsLinkSegmentOrientationFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation {
    return json as VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation;
}

export function VTApiPlaneraResaWebV4ModelsLinkSegmentOrientationToJSON(value?: VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation | null): any {
    return value as any;
}

