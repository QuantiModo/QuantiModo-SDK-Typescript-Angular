/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class UserTokenRequest {

        user: UserTokenRequestInnerUserField;

        /**
         * Organization Access token
         */
        organizationAccessToken: string;
    }

}