/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class MeasurementSet {

        /**
         * Array of timestamps, values, and optional notes
         */
        measurements: Array<ValueObject>;

        /**
         * ORIGINAL name of the variable for which we are creating the measurement records
         */
        name: string;

        /**
         * Name of the application or device used to record the measurement values
         */
        source: string;

        /**
         * Variable category name
         */
        category: string;

        /**
         * Way to aggregate measurements over time. Options are \"MEAN\" or \"SUM\"
         */
        combinationOperation: MeasurementSet.CombinationOperationEnum;

        /**
         * Unit of measurement
         */
        unit: string;
    }

    export module MeasurementSet {

        export enum CombinationOperationEnum {  
            MEAN = <any> 'MEAN', 
            SUM = <any> 'SUM',
        }
    }
}