/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Update {

        /**
         * id
         */
        id: number;

        /**
         * user_id
         */
        userId: number;

        /**
         * connector_id
         */
        connectorId: number;

        /**
         * number_of_measurements
         */
        numberOfMeasurements: number;

        /**
         * success
         */
        success: boolean;

        /**
         * message
         */
        message: string;

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
