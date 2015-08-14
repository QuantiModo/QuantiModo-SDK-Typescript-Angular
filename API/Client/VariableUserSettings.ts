/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class VariableUserSettings {

        /**
         * User ID
         */
        user: number;

        /**
         * Variable DISPLAY name
         */
        variable: string;

        /**
         * Estimated duration of time following the onset delay in which a stimulus produces a perceivable effect
         */
        durationOfAction: number;

        /**
         * fillingValue
         */
        fillingValue: number;

        /**
         * joinWith
         */
        joinWith: string;

        /**
         * maximumValue
         */
        maximumValue: number;

        /**
         * minimumValue
         */
        minimumValue: number;

        /**
         * name
         */
        name: string;

        /**
         * onsetDelay
         */
        onsetDelay: number;

        /**
         * unit
         */
        unit: string;
    }

}