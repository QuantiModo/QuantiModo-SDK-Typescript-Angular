/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class ValueObject {

        /**
         * Timestamp for the measurement event in epoch time (unixtime)
         */
        timestamp: number;

        /**
         * Measurement value
         */
        value: number;

        /**
         * Optional note to include with the measurement
         */
        note: string;
    }

}