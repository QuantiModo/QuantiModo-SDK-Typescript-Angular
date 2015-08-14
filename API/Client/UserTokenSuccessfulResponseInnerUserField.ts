/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class UserTokenSuccessfulResponseInnerUserField {

        /**
         * WordPress user ID
         */
        id: number;

        /**
         * User token
         */
        accessToken: string;
    }

}