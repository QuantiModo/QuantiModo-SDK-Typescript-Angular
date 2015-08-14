/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Measurement {

        /**
         * ORIGINAL Name of the variable for which we are creating the measurement records
         */
        variable: string;

        /**
         * Application or device used to record the measurement values
         */
        source: string;

        /**
         * Timestamp for the measurement event in epoch time
         */
        timestamp: number;

        /**
         * Converted measurement value in requested unit
         */
        value: number;

        /**
         * Unit of measurement as requested in GET request
         */
        unit: string;

        /**
         * Measurement value in the unit as orignally submitted
         */
        storedValue: number;

        /**
         * Unit of measurement as originally submitted
         */
        storedUnit: string;
    }

}