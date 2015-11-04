/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Vote {

        /**
         * id
         */
        id: number;

        /**
         * client_id
         */
        clientId: string;

        /**
         * ID of User
         */
        userId: number;

        /**
         * ID of cause variable
         */
        causeId: number;

        /**
         * ID of effect variable
         */
        effectId: number;

        /**
         * Value of Vote
         */
        value: number;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;
    }

}