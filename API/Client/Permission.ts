/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Permission {

        /**
         * Grant permission to target user or public so they may access measurements within the given parameters. TODO: Rename target to something more intuitive.
         */
        target: number;

        /**
         * ORIGINAL Variable name
         */
        variableName: string;

        /**
         * Earliest time when measurements will be accessible in epoch seconds
         */
        minTimestamp: number;

        /**
         * Latest time when measurements will be accessible in epoch seconds
         */
        maxTimestamp: number;

        /**
         * Earliest time of day when measurements will be accessible in epoch seconds
         */
        minTimeOfDay: number;

        /**
         * Latest time of day when measurements will be accessible in epoch seconds
         */
        maxTimeOfDay: number;

        /**
         * Maybe specifies if only weekday measurements should be accessible
         */
        week: string;
    }

}