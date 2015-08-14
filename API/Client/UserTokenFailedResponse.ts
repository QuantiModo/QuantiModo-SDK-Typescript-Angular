/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class UserTokenFailedResponse {

        /**
         * Status code
         */
        code: number;

        /**
         * Message
         */
        message: string;

        success: boolean;
    }

}