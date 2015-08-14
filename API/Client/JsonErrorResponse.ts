/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class JsonErrorResponse {

        /**
         * Status: \"ok\" or \"error\"
         */
        status: string;

        /**
         * Error message
         */
        message: string;
    }

}