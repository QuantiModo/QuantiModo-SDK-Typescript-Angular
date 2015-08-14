/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class UserTokenSuccessfulResponse {

        /**
         * Status code
         */
        code: number;

        /**
         * Message
         */
        message: string;

        user: UserTokenSuccessfulResponseInnerUserField;
    }

}