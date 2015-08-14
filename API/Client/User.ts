/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class User {

        /**
         * User id
         */
        id: number;

        /**
         * Wordpress user id
         */
        wpId: number;

        /**
         * User display name
         */
        displayName: string;

        /**
         * User login name
         */
        loginName: string;

        /**
         * User email
         */
        email: string;

        /**
         * User token
         */
        token: string;

        /**
         * Is user administrator
         */
        administrator: boolean;
    }

}