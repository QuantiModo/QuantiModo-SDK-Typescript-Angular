/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Source {

        /**
         * id
         */
        id: number;

        /**
         * client_id
         */
        clientId: string;

        /**
         * Name of the application or device
         */
        name: string;

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
