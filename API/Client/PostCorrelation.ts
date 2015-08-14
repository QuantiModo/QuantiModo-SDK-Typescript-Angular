/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class PostCorrelation {

        /**
         * Cause variable name
         */
        cause: string;

        /**
         * Effect variable name
         */
        effect: string;

        /**
         * Correlation value
         */
        correlation: number;

        /**
         * Vote: 0 or 1
         */
        vote: number;
    }

}