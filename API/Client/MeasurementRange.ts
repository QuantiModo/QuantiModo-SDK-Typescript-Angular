/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class MeasurementRange {

        /**
         * The timestamp of the earliest measurement for a user.
         */
        lowerLimit: number;

        /**
         * The timestamp of the most recent measurement for a user.
         */
        upperLimit: number;
    }

}