/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Unit {

        /**
         * Unit name
         */
        name: string;

        /**
         * Unit abbreviation
         */
        abbreviatedName: string;

        /**
         * Unit category
         */
        category: Unit.CategoryEnum;

        /**
         * Unit minimum value
         */
        minimum: number;

        /**
         * Unit maximum value
         */
        maximum: number;

        /**
         * Conversion steps list
         */
        conversionSteps: Array<ConversionStep>;
    }

    export module Unit {

        export enum CategoryEnum {  
            Distance = <any> 'Distance', 
            Duration = <any> 'Duration', 
            Energy = <any> 'Energy', 
            Frequency = <any> 'Frequency', 
            Miscellany = <any> 'Miscellany', 
            Pressure = <any> 'Pressure', 
            Proportion = <any> 'Proportion', 
            Rating = <any> 'Rating', 
            Temperature = <any> 'Temperature', 
            Volume = <any> 'Volume', 
            Weight = <any> 'Weight',
        }
    }
}